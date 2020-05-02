const express = require("express");
const BookController = require("./controllers/BookController");
const MercadoEditorialController = require("./controllers/MercadoEditorialController");
const ProfileController = require("./controllers/ProfileController");
const CategoryController = require("./controllers/CategoryController");

const routes = express.Router();

routes.post("/books", BookController.createBook);
routes.delete("/books/:id", BookController.deleteBook);

routes.get("/searchBook", MercadoEditorialController.searchBook);

routes.get("/listaDesejos", ProfileController.getListaDesejos);
routes.get("/livrosLendo", ProfileController.livrosLendo);
routes.get("/livrosLidos", ProfileController.livrosLidos);

routes.post("/category", CategoryController.createCategory);
routes.delete("/category/:id", CategoryController.deleteCategory);
routes.get("/categories", CategoryController.getAll)

module.exports = routes;
