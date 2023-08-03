import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/example.txt");
});

test("Test Response Body Other", async () => {
  const response = await request(app).get("/");

  expect(response.text).toContain("Ini adalah sample text");
});
