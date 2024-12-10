const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.send(`
  <h1>Welcome,this is Home Page</h1>
  <a href="/about">Go to About Page</a>
  `);
});
app.get("/about", (req, res) => {
  res.send(`

       <input type="text"placeholder="User name" value="${req.query.name}"/>
       <button>Click Me</button>
       <a href="/home">Go to Home Page</a>
  `);
});
// app.get("/help", (req, res) => {
//   res.send({
//     name: "ayesha",
//     age: 19,
//     city: "merta",
//   });
// });
/// ek se jayda object bnane ke liy [] me lena hoga object ko
app.get("/help", (req, res) => {
  res.send([
    {
      name: "ayesha",
      age: 19,
      city: "merta",
    },
    {
      name: "aasta",
      age: 17,
      city: "merta",
    },
    {
      name: "saddam",
      age: 30,
      city: "jaipur",
    },
  ]);
});
app.listen(6001);
