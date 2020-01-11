const express = require("express");
const app = express();

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use("/orders", orderRoutes);
app.use("/products", productRoutes);

module.exports = app;

