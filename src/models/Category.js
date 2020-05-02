const moongose = require("../database/index");

const CategorySchema = new moongose.Schema({
  nome: {
    unique: true,
    type: String,
    required: true,
  },
});

module.exports = moongose.model("Category", CategorySchema);
