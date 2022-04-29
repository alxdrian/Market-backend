const Product = require("../models/Product");

exports.getAllProducts = async (req, res, next) => {
  try {
    const [products, _] = await Product.findAll();
    res.status(200).json({products});

  } catch (error) {
    console.log(error);
    next(error);
  }
}