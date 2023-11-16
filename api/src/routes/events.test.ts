import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import eventsRouter from "./events"; // Adjust path as needed

const app = express();
app.use(bodyParser.json());
app.use("/api/events", eventsRouter);

describe("Events API", () => {
  it("GET /api/events - should return all events", async () => {
    const response = await request(app).get("/api/events");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  //TODO: Other tests to follow...
});
