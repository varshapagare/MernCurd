import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">
                Employee No.
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200">
                Employee Name
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200">City</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Department</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Salary</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.productNo}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.productName}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.city}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.designation}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
