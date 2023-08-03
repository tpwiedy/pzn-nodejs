import express from "express";
import request from "supertest";

const app = express();
const errorMiddleware = (err, req, res, next) => {
  res.status(500).send(`Terjadi Error: ${err.message}`);
};

app.get("/", (req, res) => {
  throw new Error("Error 💥");
});

test("Test Response Body Other", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(500);
  expect(response.text).toContain("Error 💥");
});
