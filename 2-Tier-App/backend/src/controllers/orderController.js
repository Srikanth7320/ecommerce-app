const orderService = require("../services/orderService");

exports.createOrder = (req, res) => {
  const order = orderService.createOrder(req.body);
  res.status(201).json(order);
};

exports.getOrders = (req, res) => {
  res.json(orderService.getOrders());
};