const Book = require("../../src/models/Book");

module.exports = async () => {
  try {
    await Book.deleteMany();
  } catch (err) {
    throw err;
  }
};
