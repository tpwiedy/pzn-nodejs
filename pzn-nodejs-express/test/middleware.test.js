import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.info(`Recieve request: ${req.method} ${req.originalUrl}`);
  next();
};

const addPoweredHeader = (req, res, next) => {
  res.set("X-Powered-By", "Programmer Zaman Now");
  next();
};

const apiKeyMiddelware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
const app = express();

app.use(logger);
app.use(apiKeyMiddelware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Response");
});
app.get("/wiedy", (req, res) => {
  res.send("Hello Wiedy");
});
app.get("/time", (req, res) => {
  res.send(`Hello, today is ${req.requestTime}`);
});

test("Test Middleware", async () => {
  const response = await request(app).get("/").query({ apiKey: "123" });
  expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
  expect(response.text).toBe("Hello Response");
});

test("Test Middleware 2", async () => {
  const response = await request(app).get("/wiedy").query({ apiKey: "123" });
  expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
  expect(response.text).toBe("Hello Wiedy");
});

test("Test Middleware 3 Anauthorized", async () => {
  const response = await request(app).get("/wiedy");
  expect(response.status).toBe(401);
});
test("Test Middleware Request Time", async () => {
  const response = await request(app).get("/time").query({ apiKey: "123" });
  expect(response.text).toContain(`Hello, today is`);
});
