const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db/connection");
const hbs = require("hbs");
const port = 5001;
const Register = require("./models/registers");
const { cp } = require("fs");
const { userInfo } = require("os");
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "./templates/views"); // Correct spelling
const Partials_path = path.join(__dirname, "./templates/partials"); // Correct spelling
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path); // Ensure the template path is correct
hbs.registerPartials(Partials_path); // Ensure partials path is correct

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login"); // Assuming you have a login.hbs file
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword; // Correct this variable name

    if (password === cpassword) {
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword, // Correctly save confirmpassword
      });

      const registered = await registerEmployee.save();
      res.status(201).render("index");
    } else {
      res.send("Passwords are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const useremail = await Register.findOne({ email: email });

    if (useremail && useremail.password === password) {
      res.status(201).render("slider");
      // res.send("Login successful");
    } else {
      res.send("Invalid Login Details");
    }
  } catch (error) {
    res.status(400).send("Invalid Login Detailsl");
  }
});
console.log(static_path);
console.log(template_path);
console.log(Partials_path);

app.listen(port, () => {
  console.log("server is running on ", port);
});
