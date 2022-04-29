const db = require("../config/database");

class Product {
  constructor() {}

  static findAll() {
    let sql = "SELECT * FROM product";
    return db.execute(sql);
  }
}

module.exports = Product;