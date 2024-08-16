const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/users");
// const Product = require("./db/product");
const Fruits = require("./db/fruits");
const app = express();
const Jwt = require("jsonwebtoken");
// const jwtKey = "test";
const jwtKey = process.env.JWT_KEY || "test";
const port = 6002;

app.use(cors());
app.use(express.json());

// User registration
// app.post("/api/signup", async (req, res) => {
//   try {
//     let user = new User(req.body);
//     let result = await user.save();
//     res.send(result);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Server Error");
//   }
// });

app.post("/register", async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ user }, jwtKey, { expiresIn: "12h" }, (err, token) => {
      if (err) {
        res.send({ result: "something went wrong, Please try after sometime" });
      }
      res.send({ result, auth: token });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

// User login
app.post("/api/login", async (req, res) => {
  console.log("Received login data:", req.body);

  if (req.body.password && req.body.email) {
    // यूज़र को पासवर्ड और ईमेल के आधार पर ढूंढना
    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");

    console.log("Found user:", user);

    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "12h" }, (err, token) => {
        if (err) {
          res.send({
            result: "something went wrong, Please try after sometime",
          });
        } else {
          res.send({ user, auth: token });
        }
      });
    } else {
      res.send({ result: "Invalid credentials. Please try again." });
    }
  } else {
    res.send({ result: "Please provide both email and password." });
  }
  //   if (!user) {
  //     return res.status(400).send({ message: "Invalid credentials" });
  //   }
  //   user = user.toObject();
  //   delete user.password;
  //   Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
  //     if (err) {
  //       res.send({ result: "something went wrong, Please try after sometime" });
  //     }
  //     res.send({ user, auth: token });
  //   });
  // } catch (error) {
  //   console.error("Error during login:", error);
  //   res.status(500).send({ error: "Internal Server Error" });
  // }
});

// Add product
app.post("/add-product", verifyToken, async (req, res) => {
  const { name, price, category, company, userId } = req.body;
  if (!name || !price || !category || !company || !userId) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  try {
    const product = new Fruits({
      name,
      price,
      category,
      company,
      userId,
    });
    await product.save();
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error adding product", error });
  }
});

app.get("/product", verifyToken, async (req, res) => {
  let product = await Fruits.find();
  console.log(product);
  if (product.length > 0) {
    res.send(product);
  } else {
    res.send({ result: "no products found" });
  }
});

app.delete("/products/:id", verifyToken, async (req, res) => {
  console.log(res);
  res.send(req.params.id);
  const result = await Fruits.deleteOne({ _id: req.params.id });
  console.log(result);
});

app.get("/products/:id", verifyToken, async (req, res) => {
  try {
    let result = await Fruits.findOne({ _id: req.params.id });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ result: "No record found" });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.put("/update-products/:id", async (req, res) => {
  let result = await Fruits.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/search/:key", verifyToken, async (req, res) => {
  let result = await Fruits.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];
    console.log("middleware called if", token);
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send("please provide valid token");
      } else {
        next();
      }
    });
  } else {
    res.status(403).send("please add token with header");
  }
  console.log("middleware called", token);
}
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
