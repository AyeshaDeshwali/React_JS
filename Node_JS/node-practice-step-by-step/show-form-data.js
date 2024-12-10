const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 2030;
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// Optional: Middleware to parse JSON data
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/form.html"));
});
app.post("/api/v1/login", (req, res) => {
  console.log(req.body);
  res.send(
    `<h1> your name is. ${req.body.username} </h1> <h2> Your password is: ${req.body.password} </h2> <h3> ans your email is: ${req.body.email} </h3>`
  );
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
