const db = require("../config/database");

class Category {
  constructor() {}

  static findAll() {
    let sql = "SELECT * FROM category";
    return db.execute(sql);
  }
}

module.exports = Category;