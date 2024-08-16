const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  company: String,
  userId: String,
});

module.exports = mongoose.model("products", productSchema);
