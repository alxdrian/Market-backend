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

  static findByFilters(name, category) {
    let sql = "SELECT * FROM product WHERE 1=1";
    let queries = [];
    if (name) {
      sql += ` AND name LIKE ?`;
      queries.push(`%${name}%`);
    }
    if (category) {
      sql += ` AND category LIKE ?`;
      queries.push(`%${category}%`);
    }
    return db.execute(sql, queries);
  }
}

module.exports = Product;