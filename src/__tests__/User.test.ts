import request from "supertest";

import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();

    await connection.runMigrations();
  });

  it("should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "johndoe@example.com",
      name: "John Doe",
    });

    expect(response.status).toBe(201);
  });

  it("should no be able to create an user with exists email", async () => {
    const response = await request(app).post("/users").send({
      email: "johndoe@example.com",
      name: "John Doe",
    });

    expect(response.status).toBe(400);
  });
});
