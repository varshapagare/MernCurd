const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productNo: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
