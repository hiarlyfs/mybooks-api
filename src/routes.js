const express = require("express");
const BookController = require("./controllers/BookController");
const MercadoEditorialController = require("./controllers/MercadoEditorialController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

routes.post("/books", BookController.createBook);
routes.delete("/books/:id", BookController.deleteBook);
routes.put("/books/:id", BookController.updateStatus);

routes.get("/searchBook", MercadoEditorialController.searchBook);

routes.get("/listaDesejos", ProfileController.getListaDesejos);
routes.get("/livrosLendo", ProfileController.livrosLendo);
routes.get("/livrosLidos", ProfileController.livrosLidos);
routes.get("/livrosLidosEm", ProfileController.livrosLidosEm);

module.exports = routes;
