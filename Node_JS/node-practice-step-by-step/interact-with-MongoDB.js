const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm", { useNewUrlParser: true, useUnifiedTopology: true });
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ProductModel = mongoose.model("Product", productSchema);
const addProduct = async (productName, productPrice) => {
  try {
    const newProduct = new ProductModel({
      name: productName,
      price: productPrice,
    });

    const result = await newProduct.save();
    console.log("Product added successfully:", result);
  } catch (error) {
    console.error("Error adding product:", error.message);
  }
};

const getAllProducts = async () => {
  try {
    // Retrieve all products from the database
    const products = await ProductModel.find();
    console.log("All Products:", products);
  } catch (error) {
    console.error("Error retrieving products:", error.message);
  }
};

(async () => {
  await addProduct("aastana", 20);
  await getAllProducts();
  mongoose.disconnect(); // Disconnect from the database after operations
})();
