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

  static findByFilters(name, category, pricemin, pricemax) {
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
    console.log(pricemin);
    if (pricemin) {
      sql += ` AND price >= ?`;
      queries.push(pricemin);
    }
    if (pricemax) {
      sql += ` AND price <= ?`;
      queries.push(pricemax);
    }
    return db.execute(sql, queries);
  }
}

module.exports = Product;