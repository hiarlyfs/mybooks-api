const Book = require("../../src/models/Book");
const Category = require("../../src/models/Category");

module.exports = async () => {
  try {
    await Book.deleteMany();
    await Category.deleteMany();
  } catch (err) {
    throw err;
  }
};
