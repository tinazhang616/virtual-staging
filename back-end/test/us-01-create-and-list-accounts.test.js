const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("US-01 - Create and list accounts", () => {
  beforeAll(() => {
    return knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest());
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    console.log("server close");
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("App", () => {
    describe("not found handler", () => {
      test("returns 404 for non-existent route", async () => {
        const response = await request(app)
          .get("/fastidious")
          .set("Accept", "application/json");

        expect(response.status).toBe(404);
        expect(response.body.error).toBe("Path not found: /fastidious");
      });
    });
  });

  describe("GET /accounts", () => {
    test("returns 404 for non-existent id", async () => {
      const response = await request(app)
        .get("/accounts?email=hi")
        .set("Accept", "application/json");

      expect(response.body.error).toContain("hi");
      expect(response.status).toBe(404);
    });
  });

  describe("POST /accounts", () => {
    test("returns 201 if data is valid", async () => {
      const data = {
        name: "first last",
        email: "firstlast@gmail.com",
        password: "we123",
      };

      const response = await request(app)
        .post("/accounts")
        .set("Accept", "application/json")
        .send({ data });

      expect(response.body.error).toBeUndefined();
      expect(response.body.data).toEqual(
        expect.objectContaining({
          name: "first last",
          email: "firstlast@gmail.com",
          password: "we123",
        })
      );
      expect(response.status).toBe(201);
    });
  });
});
