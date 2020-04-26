const express = require("express");
const BookController = require("./controllers/BookController");
const MercadoEditorialController = require("./controllers/MercadoEditorialController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

routes.post("/books", BookController.createBook);
routes.delete("/books/:id", BookController.deleteBook);

routes.get("/searchBook", MercadoEditorialController.searchBook);

routes.get("/listaDesejos", ProfileController.getListaDesejos);
routes.get("/livrosLendo", ProfileController.livrosLendo);
routes.get("/livrosLidos", ProfileController.livrosLidos);

module.exports = routes;
