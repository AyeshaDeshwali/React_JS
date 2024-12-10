let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.put("/", async (req, res) => {
let data = await dbConnect();
let result = await data.updateOne(
  { name: "Abubakar" },
  { $set: { mobile: 4234645723 } }
);
  res.send(result);
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});




let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.put("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.updateOne({ name: "Abubakar" }, { $set: req.body });
  res.send({ result: "update" });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});





let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.put("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.updateOne({ name: req.body.name }, { $set: req.body });
  res.send({ result: "update" });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});



let dbConnect = require("./mongodb");
let express = require("express");
let app = express();
let port = 3000;
app.use(express.json());
app.put("/:name", async (req, res) => {
let data = await dbConnect();
let result = await data.updateOne(
  { name: req.params.name },
  { $set: req.body }
); 
  res.send({ result: "update" });
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});



