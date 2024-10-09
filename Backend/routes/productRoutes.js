const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/search', productController.getProductByNumber);
router.delete('/:id', productController.deleteProductById);

module.exports = router;
