import React, { useState } from "react";
const BASE_URL = "/api";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await fetch("BASE_URL/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, price })
    });

    alert("Product added!");
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
