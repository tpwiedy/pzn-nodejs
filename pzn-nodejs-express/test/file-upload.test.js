import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //extended: false => difungsikan untuk tidak membaca query parameter
app.use(expressFileUpload());

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({
    hello: `Hello ${name}`,
  });
});

app.post("/", async (req, res) => {
  const textFile = req.files.article;
  await textFile.mv(__dirname + "/upload/" + textFile.name); //textFile.mv digunakan untuk memindahkan file

  res.send(`Hello ${req.body.name}, you upload ${textFile.name}`);
});

test("Test Request JSON", async () => {
  const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "World" });

  expect(response.body).toEqual({
    hello: `Hello World`,
  });
});

test("Test Request Form", async () => {
  const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=World"); //penulisan datanya serperti query parameter

  expect(response.body).toEqual({
    hello: `Hello World`,
  });
});
