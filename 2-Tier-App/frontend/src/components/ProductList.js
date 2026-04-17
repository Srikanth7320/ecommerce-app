import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;