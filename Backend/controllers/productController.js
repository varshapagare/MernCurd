const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { productNo, productName, city,designation, price } = req.body;

  try {
    const newProduct = new Product({ productNo, productName, city,designation, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to create employee", error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

exports.getProductByNumber = async (req, res) => {
  const { productNo } = req.query;

  try {
    const product = await Product.findOne({ productNo });
    if (!product) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch employee", error });
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "employee not found" });
    }
    res.status(200).json({ message: "Employee Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete ", error });
  }
};
