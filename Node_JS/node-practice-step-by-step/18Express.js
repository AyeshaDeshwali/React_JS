// Express.js Node.js ke liye ek web application framework hai, jo HTTP server set up, routing, middleware support, aur static file serving jaise tasks ko asaan banata hai. Iske istemal se developers asaanise dynamic web applications banate hain.
// Express.js ka istemal aksar single-page applications, web APIs, aur microservices banane ke liye hota hai. Iski flexibility aur vast ecosystem ke karan, ye developers ke beech mein kafi lokpriya hai Node.js web development mein.
// Express.js, Node.js par adharit ek web application framework hai. Ismein HTTP server set up, routing, middleware support aur static file serving jaise features shamil hain. Developers iska istemal karke asaanise server-side web applications aur APIs develop karte hain. Express.js template engines ke sath integration bhi allow karta hai, jisse dynamic content generate kiya ja sakta hai.

// example - ye kam nhi krega kunki express.js ko install kiya gya h or ye indexe.js me kam krega package.json me pta kr skte h install ka
const express = require("express");
const app = express();

app.get("", (req, res) => {
  // root page
  res.send("Welcome,this is Home Page");
});

app.get("/about", (req, res) => {
  // about page
  res.send("Welcome,this is About Page");
});

app.get("/help", (req, res) => {
  // help page
  res.send("Welcome,this is Help Page");
}); // jub b nya kam krte h to node.js ko restart krna pdta h baar na krna pde to nodemon ka use hoga
app.listen(6060);
