// ./controllers/control.js
const userModel = require("../modules/module");

const handleGetAllUsers = async (req, res) => {
  const users = await userModel.find();
  return res.json(users);
};

const handleGetUserById = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};

const handleUpdateById = async (req, res) => {
  await userModel.findByIdAndUpdate(req.params.id, { lastName: "changed" });
  return res.json({ status: "success" });
};

const handleDeleteById = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
};

const handleCreateNewUsers = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body ||
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.gender ||
      !body.jobTitle
    ) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    const newUser = await userModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });
    console.log("New user created:", newUser);
    return res.status(201).json({ msg: "success", id: newUser._id });
  } catch (error) {
    console.error("Error creating new user:", error);
    return res.status(500).json({ msg: "Error creating new user" });
  }
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateById,
  handleDeleteById,
  handleCreateNewUsers,
};
