const Book = require("../models/Book");

module.exports = {
  getListaDesejos: async (req, res) => {
    try {
      const books = await Book.find({ status: "LISTA DE DESEJOS" });

      return res.send(books);
    } catch (error) {
      return res.status(400).send({ error: "Can't get lista de desejos" });
    }
  },

  livrosLidos: async (req, res) => {
    const { ano } = req.query;
    try {
      const books = await Book.find({ status: "FINALIZADO" });

      return res.send(books);
    } catch (error) {
      return res.status(400).send({ error: "Can't get books readers" });
    }
  },

  livrosLidosEm: async (req, res) => {
    const { ano } = req.query;
    try {
      const books = await Book.find({ anoLido: Number.parseInt(ano) });

      return res.send(books);
    } catch (error) {
      return res.status(400).send({ error: "Can't get books readers" });
    }
  },

  livrosLendo: async (req, res) => {
    const { ano } = req.query;
    try {
      const books = await Book.find({ status: "LENDO" });

      return res.send(books);
    } catch (error) {
      return res.status(400).send({ error: "Can't get books" });
    }
  },
};
