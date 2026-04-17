import React from "react";
import { createOrder } from "../services/api";

const Cart = ({ cart, clearCart }) => {
  const placeOrder = async () => {
    await createOrder({ items: cart });
    alert("Order placed!");
    clearCart();
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
      {cart.length > 0 && (
        <button onClick={placeOrder}>Place Order</button>
      )}
    </div>
  );
};

export default Cart;