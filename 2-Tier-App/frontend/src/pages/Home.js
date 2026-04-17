import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Shop</h2>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default Home;