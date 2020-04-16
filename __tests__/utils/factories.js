const { factory } = require("factory-girl");
const Book = require("../../src/models/Book");

factory.define("Book", Book, {
  titulo: "Poetas no topo 1",
  isbn: 1234567891112,
  autores: ["Hialry Fernandes de Souto"],
  paginas: 200,
  sinopse: "Música foda",
  status: "FINALIZADO"
});

module.exports = factory