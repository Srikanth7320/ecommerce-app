const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth'); // You'll need to create this
const router = express.Router();

// Create order
router.post('/', auth, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      userId: req.user.userId
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user orders
router.get('/my-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId })
      .sort({ createdAt: -1 })
      .populate('items.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;