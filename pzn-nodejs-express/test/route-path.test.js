import express from "express";
import request from "supertest";

const app = express();

//mengambil file regex apapun yang berextension .json pada path /products/
app.get("/products/*.json", (req, res) => {
  res.send(req.originalUrl);
});

//mengambil file dengan regex desimal yang berextension .json pada path /categories/
app.get("/categories/*(\\d+).json", (req, res) => {
  res.send(req.originalUrl);
});

test("Test Route Path", async () => {
  let response = await request(app).get("/products/wiedy.json");
  expect(response.text).toBe("/products/wiedy.json");

  response = await request(app).get("/products/890192.json");
  expect(response.text).toBe("/products/890192.json");

  response = await request(app).get("/categories/1234.json");
  expect(response.text).toBe("/categories/1234.json");

  response = await request(app).get("/categories/salah.json");
  expect(response.status).toBe(404);
});
