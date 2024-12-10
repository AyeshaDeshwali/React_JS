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

const deleteData = async () => {
  let result = await client.connect(); // Connect to the MongoDB server
  let db = result.db("e-comm");
  let collection = db.collection("products");

  let deleteResult = await collection.deleteOne({ name: "aasta" });

  if (deleteResult.acknowledged) {
    console.log("Record deleted");
  }
};

deleteData();
