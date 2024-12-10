// Post API insert data in MongoDB

const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
const PORT = 5000;

app.use(express.json());
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertMany(req.body);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
