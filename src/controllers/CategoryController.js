const Category = require("../models/Category");

module.exports = {
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      return res.send(category);
    } catch (error) {
      return res.status(400).send({ error: "Can't create a new category" });
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByIdAndDelete(id);

      return res.send(category);
    } catch (error) {
      return res.status(400).send({ error: "Can't delete category" });
    }
  },

  getAll: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.send(categories);
    } catch (error) {
      return res.status(400).send({ error: "Can't delete category" });
    }
  },
};
