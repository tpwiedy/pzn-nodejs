import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from App GET");
});

app.listen(3000, () => {
  console.info("server started on port 3000");
});
