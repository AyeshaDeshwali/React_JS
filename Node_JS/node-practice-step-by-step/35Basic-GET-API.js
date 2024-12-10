// GET - Database se Data ko Retrieve(Get) karne ke liye
// POST - Database ke ander Data ko Create karne ke liye
// PUT - Database ke ander Data ko Update karne ke liye
// DELETE - Database me se Data ko Delete karne ke liye

const express = require("express");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const getData = async () => {
  let result = await client.connect();
  let db = result.db("e-comm");
  let collection = db.collection("products");
  console.log(await collection.find({ name: "ayesha" }).toArray());
};
getData();

const app = express();
const PORT = 5000;

app.get("/", async (req, res) => {
  let result = await client.connect(); // Connect to the MongoDB server
  let db = result.db("e-comm");
  let collection = db.collection("products");

  let data = await collection.find({}).toArray();
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
