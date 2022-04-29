const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categoryControllers');

// Route GET /api/categories
router.route('/').get(categoryControllers.getAllCategories);

module.exports = router;