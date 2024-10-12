const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ name: "aastana", age: 19 });
});

module.exports = router;
