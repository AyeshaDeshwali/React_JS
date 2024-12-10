// const { MongoClient } = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;
// in donu lines me se koy si b use kr skte h becouse ye done sem hi h

// const { MongoClient } = require("mongodb"); // Module se MongoClient class nikali gayi hai
// const url = "mongodb://localhost:27017"; // MongoDB connection ke liye URL
// const client = new MongoClient(url); // MongoClient class ka ek naya instance(object) banaya gaya hai
// // MongoClient ek class hai, lekin jab aap usse ek instance(object) banate hain, tab woh ek object ban jata hai jo MongoDB server ke saath communicate karta hai.

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const getData = async () => {
//   let result = await client.connect();
//   let db = result.db("e-comm");
//   let collection = db.collection("products");
//   // console.log(await collection.find().toArray());
//   // console.log(await collection.find({}).toArray());
//   console.log(await collection.find({ name: "ayesha" }).toArray());
// };
// getData();

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const getData = async () => {
//   try {
//     await client.connect();
//     const db = client.db("e-comm");
//     const collection = db.collection("products");
//     const ans = await collection.find({}).toArray();
//     console.log(ans);
//   } finally {
//     await client.close();
//   }
// };
// // getData function ko call karne ke liye await ka istemal karein
// getData();

// (async () => {
//   const { MongoClient } = require("mongodb");
//   const url = "mongodb://localhost:27017";
//   const client = new MongoClient(url);
//   const getData = async () => {
//     try {
//       await client.connect();
//       const db = client.db("e-comm");
//       const collection = db.collection("products");
//       const ans = await collection.find({}).toArray();
//       console.log(ans);
//     } finally {
//       await client.close();
//     }
//   };
//   await getData();
// })();
