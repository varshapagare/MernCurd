import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const products = response.data;
        const total = products.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4"> Total Salary</h2>
        <div className="text-lg">
          <p>
            Total Salary:{" "}
            <span className="font-semibold">${totalPrice}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
