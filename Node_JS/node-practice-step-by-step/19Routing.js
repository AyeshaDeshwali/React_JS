// Routing Parametors - Request and Response

// Response<------------------------Request
// Server-------------------------->Client

// Client hamesha Request krta h or Server hamesha Response deta h

// example-
// jub b Client se Data aayga wo Request parametor m aayga
// or jo b Data send krnge wo Response vale parametor m krnge
// node.js Server h es liy esne Response diya this is a Home Page

const express = require("express");
const app = express();

// http://localhost:6060/?name=ayesha
// app.get("", (req, res) => {
//   console.log("data sent by browser =>>>", req.query.name);
//   res.send("Welcome,this is Home Page");
// });

app.get("", (req, res) => {
  console.log("data sent by browser =>>>", req.query.name);
  res.send("Welcome, " + req.query.name);
});

app.get("/home", (req, res) => {
  res.send("<h1>Welcome,this is Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("Welcome,this is About Page");
});

app.get("/help", (req, res) => {
  res.send("Welcome,this is Help Page");
}); // jub b nya kam krte h to node.js ko restart krna pdta h baar na krna pde to nodemon ka use hoga

app.listen(6001);
