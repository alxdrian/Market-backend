const express = require('express');
const router = express.Router();

// Route GET /api/products
router.route('/').get(productControllers.getAllProducts);

module.exports = router;