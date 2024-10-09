import React, { useState } from "react";
import axios from "axios";

const InsertProduct = () => {
  const [product, setProduct] = useState({
    productNo: "",
    productName: "",
    city: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        product
      );
      console.log(response.data);
      setProduct({ productNo: "", productName: "", city: "", price: "" });
    } catch (error) {
      console.error("Error inserting product", error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Employee No.:
            </label>
            <input
              type="text"
              name="productNo"
              value={product.productNo}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Name:
            </label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter City:
            </label>
            <input
              type="text"
              name="city"
              value={product.city}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>



          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Designation:
            </label>
            <input
              type="String"
              name="designation"
              value={product.designation}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Salary:
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InsertProduct;
