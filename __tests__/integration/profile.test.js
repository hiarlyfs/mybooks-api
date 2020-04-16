const request = require("supertest");
const clearDb = require("../utils/clearDB");
const factory = require("../utils/factories");

const app = require("../../src/app");

describe("Profile's Books", () => {
  it("Should get desire's list of a user", async () => {
    try {
      await factory.create("Book", {
        isbn: 1234567891,
        status: "LISTA DE DESEJOS",
      });

      await factory.create("Book", {
        isbn: 1234567892,
        status: "LISTA DE DESEJOS",
      });

      const response = await request(app).get("/listaDesejos");

      return expect(response.status).toBe(200);
    } catch (error) {
      throw errro;
    }
  });

  it("Should get books read in a year", async () => {
    try {
      await clearDb();
      await factory.create("Book", {
        isbn: 1234567891,
        status: "FINALIZADO",
        finalizadoEm: new Date(),
      });

      await factory.create("Book", {
        isbn: 1234567890,
        status: "FINALIZADO",
        finalizadoEm: new Date(),
      });

      const response = await request(app).get("/livrosLidosEm?ano=2020");
      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  it("Should get all books read", async () => {
    try {
      await clearDb();
      await factory.create("Book", {
        isbn: 1234567891,
        status: "FINALIZADO",
        finalizadoEm: new Date(),
      });

      await factory.create("Book", {
        isbn: 1234567890,
        status: "FINALIZADO",
        finalizadoEm: new Date(),
      });

      const response = await request(app).get("/livrosLidos");

      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  it("Should get books has been read", async () => {
    try {
      await clearDb();
      await factory.create("Book", {
        isbn: 1234567891,
        status: "LENDO",
        finalizadoEm: new Date(),
      });

      await factory.create("Book", {
        isbn: 1234567890,
        status: "LENDO",
        finalizadoEm: new Date(),
      });

      const response = await request(app).get("/livrosLendo");
      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });
});
