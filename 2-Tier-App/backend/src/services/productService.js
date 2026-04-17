let products = require("../data/products.json");

exports.getAllProducts = () => products;

exports.addProduct = (product) => {
  product.id = Date.now();
  products.push(product);
  return product;
};