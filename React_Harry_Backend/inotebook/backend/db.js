const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/harry";
const connenctToMongo = async () => {
  await mongoose.connect(mongoURI);
};

module.exports = connenctToMongo;
