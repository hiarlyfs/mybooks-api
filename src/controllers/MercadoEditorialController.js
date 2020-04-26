const googleBooksApi = require("../services/GoogleBooks");

module.exports = {
  searchBook: async (req, res) => {
    const { titulo } = req.query;
    try {
      const books = await googleBooksApi
        .get(`?q=${titulo}&key=${process.env.API_KEY}`)
        .then((res) => {
          return res.data.items;
        });

      return res.send(books);
    } catch (err) {
      return res.status(400).send({ error: "Can't search for book" });
    }
  },
};
