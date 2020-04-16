const request = require("supertest");
const clearDb = require("../utils/clearDB");
const factory = require("../utils/factories");

const app = require("../../src/app");

describe("Test Books", () => {
  it("Should create a new Book", async () => {
    try {
      await clearDb();

      const response = await request(app).post("/books").send({
        isbn: 9788521213284,
        status: "FINALIZADO",
      });

      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  it("Should search books", async () => {
    try {
      await clearDb();

      const responseIsbn = await request(app).get(
        "/searchBook?isbn=9788521213284"
      );
      const responseTitulo = await request(app).get(
        "/searchBook?titulo=Sistemas Operacionais Modernos"
      );

      expect(responseIsbn.status).toBe(200);
      return expect(responseTitulo.status).toBe(200);
    } catch (err) {
      throw err;
    }
  });

  it("Should delete a book", async () => {
    try {
      await clearDb();

      const book = await factory.create("Book");

      const response = await request(app).delete(`/books/${book._id}`);

      return expect(response.status).toBe(200);
    } catch (err) {
      throw err;
    }
  });

  it("Should update the status of a book", async () => {
    try {
      const book = await factory.create("Book");

      const response = await request(app).put(`/books/${book._id}`).send({
        status: "LISTA DE DESEJO",
      });

      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });
});
