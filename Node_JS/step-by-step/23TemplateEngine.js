// Template Engine ek tarah ka tool ya framework hota hai jo aapko Node.js mein dynamic web pages banane mein madad karta hai. Yeh aapko server-side scripting language ke saath kaam karta hai aur HTML templates mein dynamic data ko integrate karne mein help karta hai.

// res.render Express.js mein template engine ke sath mila kar HTML content generate karne ke liye istemal hota hai. Yeh ek server-side rendering (SSR) ka prakar hai jiska istemal dynamic web pages banane ke liye hota hai. Kuch mukhya karan hain:

const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.get("", (req, res) => {
  res.render("index");
});
app.get("/profile", (req, res) => {
  const user = {
    name: "Aasta",
    email: "Aasta@test.com",
    city: "Jaiput",
  };
  res.render("profile", { user });
});
app.listen(2030, () => {
  console.log("Server is running on http://localhost:2030/");
});
