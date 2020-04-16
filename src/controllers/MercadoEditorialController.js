const mercadoEditorial = require("../services/mercadoEditorial");

module.exports = {
  searchBook: async (req, res) => {
    const { isbn, titulo } = req.query;
    try {
      let books = {};
      if (isbn) {
        books = await mercadoEditorial.get(`?isbn=${isbn}`).then((res) => {
          return res.data;
        });
      } else if (titulo) {
        books = await mercadoEditorial.get(`?titulo=${titulo}`).then((res) => {
          return res.data;
        });
      }

      return res.send(books);
    } catch (err) {
      return sres.status(400).send({ error: "Can't search for book" });
    }
  },
};
