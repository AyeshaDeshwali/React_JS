const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dbConnect = require("./mongodb");
const app = express();
const port = 2020;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/api/v1/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/form.html"));
});
app.post("/api/v1/login", async (req, res) => {
  try {
    if (req.body.password.length < 5) {
      res.status(400).send("Password must be at least 5 characters long.");
      return;
    }
    const collection = await dbConnect();
    const result = await collection.insertOne(req.body);
    console.log("Data inserted into the database:", result);
    res.send(
      `<h1> your name is: ${req.body.name} </h1>
       <h2> Your password is: ${req.body.password}</h2>
      <h3> and your email is: ${req.body.email} </h3>`
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Internal Server Error");
  }
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
