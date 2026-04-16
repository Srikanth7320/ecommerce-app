// Run this to populate initial data
const mongoose = require('mongoose');
const Product = require('../backend/models/Product');

mongoose.connect('mongodb://localhost:27017/ecommerce');

const sampleProducts = [
  {
    name: "iPhone 15 Pro",
    description: "Latest iPhone with A17 Pro chip",
    price: 999,
    category: "Electronics",
    stock: 50,
    image: "https://images.unsplash.com/photo-1691118492354-79be6633c3d5?w=300",
    featured: true
  },
  {
    name: "MacBook Pro",
    description: "M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 1999,
    category: "Electronics",
    stock: 25,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
    featured: true
  }
  // Add more products...
];

async function initData() {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('Sample data inserted!');
  process.exit();
}

initData();