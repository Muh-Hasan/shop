const express = require("express");
const products = require("./data/products");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("API Runing");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${port}`)
);
