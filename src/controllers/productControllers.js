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

exports.getProductById = async (req, res, next) => {
  try {
    let [product, _] = await Product.findById(req.params.id);
    res.status(200).json({product: product[0]});
  } catch (error) {
    console.log(error);
    next(error);
  }
}

exports.getProductsByFilters = async (req, res, next) => {
  try {
    let [products, _] = await Product.findByFilters(req.query.name, req.query.category);
    res.status(200).json({products});
  } catch (error) {
    console.log(error);
    next(error);
  }
}