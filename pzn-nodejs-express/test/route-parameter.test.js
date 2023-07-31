import express, { response } from "express";
import request from "supertest";

const app = express();

//mengambil file regex apapun yang berextension .json pada path /products/
app.get("/products/:id", (req, res) => {
  const idProduct = req.params.id;
  res.send(`Product: ${idProduct}`);
});

//mengambil file dengan regex desimal yang berextension .json pada path /categories/
app.get("/categories/:id(\\d+)", (req, res) => {
  const idCategories = req.params.id;
  res.send(`Categories: ${idCategories}`);
});

app.get("/tours-within/:distance/center/:latlng/unit/:unit", (req, res) => {
  const distance = req.params.distance;
  const latlng = req.params.latlng;
  const unit = req.params.unit;
  res.send(`Distance: ${distance}, Lat/langitude: ${latlng}, Unit: ${unit}`);
});

test("Test Route Path", async () => {
  let response = await request(app).get("/products/wiedy");
  expect(response.text).toBe("Product: wiedy");

  response = await request(app).get("/products/890192");
  expect(response.text).toBe("Product: 890192");

  response = await request(app).get("/categories/1234");
  expect(response.text).toBe("Categories: 1234");

  response = await request(app).get("/categories/salah.json");
  expect(response.status).toBe(404);

  response = await request(app).get(
    "/tours-within/325/center/234234/unit/miles"
  );
  expect(response.text).toBe(
    "Distance: 325, Lat/langitude: 234234, Unit: miles"
  );
});
