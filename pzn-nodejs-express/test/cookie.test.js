import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"]; //req.cookie digunakan untuk membaca cookie
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/" }); //res.cookie digunakan untuk menulis cookie. res.cookie(name,value, options(dalam case ini optionsnya adalah path mana kita bisa mulai membaca cookie. apabila tidak ditambah options path, maka cookies akan mulai dibaca pada path awal yang didefinisikan))
  res.send(`Hello ${name}`);
});

test("Test Read Cookie", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "name=Wiedy;auhtor=Programmer Zaman Now");

  expect(response.text).toBe("Hello Wiedy");
});

test("Test Write Cookie", async () => {
  const response = await request(app).post("/login").send({ name: "Wiedy" });
  expect(response.get("Set-Cookie").toString()).toBe("Login=Wiedy; Path=/");
  expect(response.text).toBe("Hello Wiedy");
});
