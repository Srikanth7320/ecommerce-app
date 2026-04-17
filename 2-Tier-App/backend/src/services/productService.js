const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

exports.getAllProducts = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

exports.addProduct = (product) => {
  const data = fs.readFileSync(filePath);
  const products = JSON.parse(data);

  product.id = Date.now();
  products.push(product);

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

  return product;
};