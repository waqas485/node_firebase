import express from "express";
import config from "./config.js";
import cors from "cors";
import {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "./controller/productController.js";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/product", (req, res, next) => {
  let resp = createProduct(req, res, next);
  res.send(resp);
});
app.post("/update/product:id", (req, res, next) => {
  let resp = updateProduct(req, res, next);
  res.send(resp);
});
app.delete("/delete/product:id", (req, res, next) => {
  let resp = deleteProduct(req, res, next);
  res.send(resp);
});

app.get("/product:id", (req, res, next) => {
  let resp = getProduct(req, res, next);
  res.send(resp);
});

app.get("/product", (req, res, next) => {
  let resp = getProducts(req, res, next);
  res.send(resp);
});
app.listen(config.port, (req, res, next) => {
  console.log("server listening on port", config.port);
});
