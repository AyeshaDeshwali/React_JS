const mongoose = require("mongoose");
let productSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mobile: Number,
});
module.exports = mongoose.model("products", productSchema);
