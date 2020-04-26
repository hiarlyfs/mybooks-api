const googleBooksApi = require("../services/GoogleBooks");
const Book = require("../models/Book");

module.exports = {
  createBook: async (req, res) => {
    const { volumeId } = req.body;
    try {
      const book = await googleBooksApi.get(`/${volumeId}`).then((res) => {
        return res.data;
      });
      const myBook = await Book.findOne({ volumeId });
      if (myBook) {
        myBook.status = req.body.status;
        if (req.body.status !== "FINALIZADO") {
          myBook.finalizadoEm = undefined;
        } else {
          myBook.finalizadoEm = req.body.finalizadoEm;
        }
        await myBook.save();
        return res.send(myBook);
      }
      const newBook = await Book.create({
        ...req.body,
        titulo: book.volumeInfo.title,
        subTitulo: book.volumeInfo.subtitle,
        autores: book.volumeInfo.authors,
        sinopse: book.volumeInfo.description,
        paginas: book.volumeInfo.pageCount,
      });

      return res.send(newBook);
    } catch (err) {
      return res.status(400).send({ error: "Can't create a new Book" });
    }
  },

  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findByIdAndDelete(id);

      return res.send(book);
    } catch (error) {
      return res.status(400).send({ error: "Can't remove book" });
    }
  },
};
