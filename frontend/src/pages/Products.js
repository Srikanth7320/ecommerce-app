import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this URL with your backend API if available
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        // fallback sample data so UI still works
        setProducts([
          { _id: 1, name: "Sample Product 1", price: 100 },
          { _id: 2, name: "Sample Product 2", price: 200 },
        ]);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
