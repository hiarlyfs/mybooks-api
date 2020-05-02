const request = require("supertest");
const clearDb = require("../utils/clearDB");
const factory = require("../utils/factories");

const app = require("../../src/app");

describe("Category Test", () => {
  it("Should create a new Category", async () => {
    try {
      await clearDb();

      const response = await request(app).post("/category").send({
        nome: "Programação",
      });

      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  it("Should delete a category", async () => {
    try {
      await clearDb();
      const category = await factory.create("Category");
      const response = await request(app).delete(`/category/${category._id}`);
      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });

  it("Should get all categories", async () => {
    try {
      await clearDb();
      await factory.create("Category");
      await factory.create("Category", {
        nome: "Estudo",
      });

      const response = await request(app).get("/categories");
      return expect(response.status).toBe(200);
    } catch (error) {
      throw error;
    }
  });
});
