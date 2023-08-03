import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("APAPUNITUYANGPENTINGSULIT"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"]; //req.signedCookies digunakan untuk membaca cookies yang sudah ada signed nya.
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/", signed: true }); //res.cookie digunakan untuk menulis cookie. res.cookie(name,value, options(dalam case ini optionsnya adalah path mana kita bisa mulai membaca cookie. apabila tidak ditambah options path, maka cookies akan mulai dibaca pada path awal yang didefinisikan))
  res.send(`Hello ${name}`);
});

test("Test Read Cookie", async () => {
  const response = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3AWiedy.Iq437%2B%2F6Wygp6B2wdFF0cM84%2BD2MrbnBomamquu1710; Path=/"
    );

  expect(response.text).toBe("Hello Wiedy");
});

test("Test Write Cookie", async () => {
  const response = await request(app).post("/login").send({ name: "Wiedy" });
  console.info(response.get("Set-Cookie").toString());
  expect(response.get("Set-Cookie").toString()).toContain("Wiedy");
  expect(response.text).toBe("Hello Wiedy");
});
