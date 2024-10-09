import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      setMessage("Employee Data deleted successfully");
    } catch (error) {
      console.error("Error deleting product", error);
      setMessage("Failed to delete product");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Update Employee Data</h2>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">
                Employee No:
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200">
                Employee Name:
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
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeleteProduct;
