const { factory } = require("factory-girl");
const Book = require("../../src/models/Book");
const Category = require("../../src/models/Category");

factory.define("Book", Book, {
  titulo: "Poetas no topo 1",
  volumeId: 123456789,
  autores: ["Hialry Fernandes de Souto"],
  paginas: 200,
  categoria: "Programaçao",
  sinopse: "Música foda",
  status: "FINALIZADO",
});

factory.define("Category", Category, {
  nome: "Programação",
});

module.exports = factory;
