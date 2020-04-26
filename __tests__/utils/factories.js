const { factory } = require("factory-girl");
const Book = require("../../src/models/Book");

factory.define("Book", Book, {
  titulo: "Poetas no topo 1",
  volumeId: 123456789,
  autores: ["Hialry Fernandes de Souto"],
  paginas: 200,
  sinopse: "Música foda",
  status: "FINALIZADO"
});

module.exports = factory