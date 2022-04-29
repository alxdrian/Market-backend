const db = require("../config/database");

class Product {
  constructor() {}

  static findAll() {
    let sql = "SELECT * FROM product";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM product WHERE id = ?`;
    return db.execute(sql, [id]);
  }
}

module.exports = Product;