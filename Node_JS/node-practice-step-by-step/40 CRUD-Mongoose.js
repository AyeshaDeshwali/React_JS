const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "max 100",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};
saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "husain" },
    {
      $set: { price: 550, name: "vivo pro 6" },
    }
  );
  console.log(data);
};
updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "max 100" });
  console.log(data);
};
deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  // let data = await Product.findOne({ name: "vivo pro 6" });
  let data = await Product.find({ name: "vivo pro 6" });
  console.log(data);
};
findInDB();
