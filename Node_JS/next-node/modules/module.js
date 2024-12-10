// ./modules/module.js
const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String, // Corrected field name to job_title
  },
});
let userModel = mongoose.model("students", userSchema);

module.exports = userModel;
