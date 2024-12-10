const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const insertData = async (data) => {
  let result = await client.connect();
  let db = result.db("e-comm");
  let collection = db.collection("products");
  await collection.insertOne(data);
  console.log("Data inserted successfully");
};
insertData({ name: "husain", age: 3, city: "Merta City" });
// insertMany() ka b use kr skte h
