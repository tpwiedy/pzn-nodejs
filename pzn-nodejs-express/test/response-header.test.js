import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "Programmer Zaman Now",
    "X-Author": "Wiedy",
  });
  res.send(`Hello Response`);
});

test("Test Response Header", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response");
  expect(response.get("x-powered-by")).toBe("Programmer Zaman Now"); //response.get is incase-sensitive, but for the value expect is must Case-Sensitive
  expect(response.get("x-author")).toBe("Wiedy");
});
