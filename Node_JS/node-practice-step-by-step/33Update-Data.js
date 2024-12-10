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

const updatedData = async () => {
  let result = await client.connect(); // Connect to the MongoDB server
  let db = result.db("e-comm");
  let collection = db.collection("products");

  let updateResult = await collection.updateOne(
    { name: "aashiya deshwali" },
    { $set: { name: "ayesha deshwali", age: 20 } }
  );

  console.log(updateResult);
};

updatedData();
