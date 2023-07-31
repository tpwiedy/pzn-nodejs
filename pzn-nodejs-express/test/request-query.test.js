import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test ExpressJS", async () => {
  const response = await request(app)
    .get("/")
    .query({ firstName: "Wiedy", lastName: "Pratama" });
  expect(response.text).toBe("Hello Wiedy Pratama");
});
