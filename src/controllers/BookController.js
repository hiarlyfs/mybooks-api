const mercadoEditorial = require("../services/mercadoEditorial");
const Book = require("../models/Book");

module.exports = {
  createBook: async (req, res) => {
    const { isbn } = req.body;
    try {
      const { books } = await mercadoEditorial
        .get(`?isbn=${isbn}`)
        .then((res) => {
          return res.data;
        });

      const myBook = await Book.findOne({ isbn });
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
        titulo: books[0].titulo,
        subTitulo: books[0].subtitulo,
        edicao: books[0].edicao,
        autores: books[0].contribuicao,
        sinopse: books[0].sinopse,
        paginas: books[0].medidas.paginas,
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

  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const book = await Book.findById(id);
      book.status = status;
      await book.save();
      return res.send(book);
    } catch (error) {
      res.status(400).send({ error: "Can't update the status of the book" });
    }
  },
};
