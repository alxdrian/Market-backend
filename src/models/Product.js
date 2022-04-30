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

  static findByFilters(
    name, 
    category, 
    pricemin, 
    pricemax, 
    discountmin, 
    discountmax
  ) {
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
    if (pricemin) {
      sql += ` AND price >= ?`;
      queries.push(pricemin);
    }
    if (pricemax) {
      sql += ` AND price <= ?`;
      queries.push(pricemax);
    }
    if (discountmin) {
      sql += ` AND discount >= ?`;
      queries.push(discountmin);
    }
    if (discountmax) {
      sql += ` AND discount <= ?`;
      queries.push(discountmax);
    }
    return db.execute(sql, queries);
  }
}

module.exports = Product;