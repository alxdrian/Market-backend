const Category = require("../models/Category");

exports.getAllCategories = async (req, res, next) => {
  try {
    const [categories, _] = await Category.findAll();
    res.status(200).json({categories});
  } catch (error) {
    console.log(error);
    next(error);
  }
}