// http://localhost:2030/about?name=ayesha&age=20

let http = require("http");
let express = require("express");
let app = express();
app
  .get("/", (req, res) => {
    res.send("this is a home page...");
  })
  .get("/about", (req, res) => {
    res.send(
      `<h1 style="color:red;">your name is ${req.query.name} and your age is ${req.query.age}</h1>`
    );
  });
let myServer = http.createServer(app);
myServer.listen(2030, () => {
  console.log("server is started!");
});

// let express = require("express");
// let app = express();
// app
//   .get("/", (req, res) => {
//     res.send("this is a home page...");
//   })
//   .get("/about", (req, res) => {
//     res.send(
//       `<h1 style="color:red;">your name is ${req.query.name} and your age is ${req.query.age}</h1>`
//     );
//   })
//   .listen(2030, () => {
//     console.log("server is started!");
//   });
