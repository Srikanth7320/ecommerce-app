const orders = require("../data/orders");

exports.createOrder = (order) => {
  order.id = Date.now();
  orders.push(order);
  return order;
};

exports.getOrders = () => orders;