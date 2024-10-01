const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();

// Create   a User: POST "/api/auth/createuser". no login required
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);

      if (user) {
        return res
          .status(400)
          .json({ email: "sorry a user with this email already exists" });
      }
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json("response: good");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some erors");
    }
  }
);

module.exports = router;
