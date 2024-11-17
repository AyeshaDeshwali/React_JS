// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
} = require("../controllers/userController");

router.post("/add", addUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);
router.get("/", getAllUsers);

module.exports = router;
