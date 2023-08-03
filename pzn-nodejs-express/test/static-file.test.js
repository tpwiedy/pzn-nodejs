import express from "express";
import request from "supertest";

const app = express();
// app.use(express.static(__dirname + "/static"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.get("/example.txt", (req, res) => {
  res.send(`Hello World`);
});

test("Test Static File", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World");
});
test("Test Static File /example.txt", async () => {
  const response = await request(app).get("/example.txt");
  expect(response.text).toContain("Hello World");
});
test("Test Static File /static/example.txt", async () => {
  const response = await request(app).get("/static/example.txt");
  expect(response.text).toContain("Ini adalah sample text");
});
