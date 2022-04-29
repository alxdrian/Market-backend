const db = require("./config/database");

class Product {
  constructor() {}

  static findAll() {
    let sql = "SELECT * FROM products";
    return db.execute(sql);
  }
}