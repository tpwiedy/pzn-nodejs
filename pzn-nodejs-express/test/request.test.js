import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from App GET");
});

test("Test ExpressJS", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello from App GET");
});
