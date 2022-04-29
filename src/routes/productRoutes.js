const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

// Route GET /api/products/search/:name
router.route('/search?').get(productControllers.getProductsByFilters);

// Route GET /api/products/:id
router.route('/:id').get(productControllers.getProductById);

// Route GET /api/products
router.route('/').get(productControllers.getAllProducts);

module.exports = router;