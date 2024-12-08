const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/registration");
    console.log("Connection successfully");
  } catch (error) {
    console.error("Connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
