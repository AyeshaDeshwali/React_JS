const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
  });
  const ProductsModel = new mongoose.model("products", ProductSchema);
  let data = new ProductsModel({ name: "m8", price: 1000 }); /// price ni jaygi kunki ye number h schema ke andr validation only name ke liy he kiya gya h
  let result = await data.save();
  console.log(result);
};
main();

const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    color: String,
    MemoryStorageCapacity: String,
  });
  const ProductsModel = new mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "realme C33",
    price: 12_000,
    color: "Night Sea",
    MemoryStorageCapacity: "32.0 GB",
  });
  let result = await data.save();
  console.log(result);
};
main();
