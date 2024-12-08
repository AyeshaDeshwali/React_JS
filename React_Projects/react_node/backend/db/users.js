const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: String,
  password: Number,
  email: String,
});

module.exports = mongoose.model("users", userSchema);
