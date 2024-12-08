const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  company: String,
  userId: String,
});

module.exports = mongoose.model("fruits", userSchema);
