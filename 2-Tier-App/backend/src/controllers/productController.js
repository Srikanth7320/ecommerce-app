const productService = require("../services/productService");

exports.getProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

exports.addProduct = (req, res) => {
  const product = productService.addProduct(req.body);
  res.status(201).json(product);
};