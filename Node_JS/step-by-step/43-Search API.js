const express = require("express");
require("./config");
const product = require("./products");
const app = express();
app.use(express.json());
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  try {
    res.send("serch done");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(2030);

const express = require("express");
require("./config");
const product = require("./products");
const app = express();
app.use(express.json());
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  try {
    let data = await product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { brand: { $regex: req.params.key } },
      ],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.listen(2030);

// _______________________________________________________________________________________________

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
// MongoDB से कनेक्ट करें
mongoose
  .connect("mongodb://localhost:27017/e-comm")
  .then(() => {
    console.log("Connected to MongoDB");
    // मॉडेल स्कीमा को डिफ़ाइन करें
    const productSchema = new mongoose.Schema({
      name: String,
      age: Number,
      mobile: Number,
    });
    // मॉडेल स्कीमा का मॉडल बनाएं और एक्सपोर्ट करें
    const Product = mongoose.model("products", productSchema);
    // खोज एपीआई एंडपॉइंट
    app.get("/search/:key", async (req, res) => {
      console.log(req.params.key);
      try {
        const key = req.params.key;
        const data = await Product.find({
          $or: [
            { name: { $regex: key, $options: "i" } },
            { brand: { $regex: key, $options: "i" } },
          ],
        });
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
    });
    // सर्वर सुनना शुरू करें
    app.listen(2030);
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
