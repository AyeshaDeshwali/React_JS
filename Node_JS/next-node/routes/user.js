// ./routes/user.js
const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateById,
  handleDeleteById,
  handleCreateNewUsers,
} = require("../controllers/control");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUsers);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateById)
  .delete(handleDeleteById);

module.exports = router;
