let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.delete("/", async (req, res) => {
  let data = await dbConnect();
  let result = data.deleteOne({ name: "ayesha" });
  res.send("Done.");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// let dbConnect = require("./mongodb");
// let express = require("express");
// let mongodb = require("mongodb");
// let app = express();
// let port = 3000;
// app.use(express.json());
// app.delete("/:id", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.deleteOne({
//     _id: new mongodb.ObjectId(req.params.id), /// http://localhost:3000/65ab36785d9aba9be12ee0c6 /// ye krna hoga mongodb se id udhake postman pe dalne se wo delete ho jaygi
//   });
//   res.send(result);
// });
// app.listen(port, () => {
//   console.log(`server is running on ${port}`);
// });
