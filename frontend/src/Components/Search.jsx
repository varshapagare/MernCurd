import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [productNo, setProductNo] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setProductNo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products/search",
        { params: { productNo } }
      );
      setProduct(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Product not found");
      } else {
        setError("Error fetching product");
      }
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Search Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Employee no:
            </label>
            <input
              type="text"
              name="productNo"
              value={productNo}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SEARCH
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {product && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Product Details</h3>
            <p>Employeet No.: {product.productNo}</p>
            <p>Employee Name: {product.productName}</p>
            <p>City: {product.city}</p>
            <p>Designation: {product.designation}</p>
            <p>Salary: ${product.price}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
