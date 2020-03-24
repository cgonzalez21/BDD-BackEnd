const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cardRoutes = require("./routes/card");
const app = express();

mongoose
  .connect(
    "mongodb+srv://root:mandarina21@cluster0-8d4ww.mongodb.net/proy_final", { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
app.use("/images/products", express.static(path.join("backend/images/products")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/card",cardRoutes);

module.exports = app;
