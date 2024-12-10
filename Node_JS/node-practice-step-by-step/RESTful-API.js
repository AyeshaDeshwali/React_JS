const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Dummy data for initial users
let users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 30 },
];

// Middleware to parse JSON
app.use(bodyParser.json());

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Add a new user
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user by ID
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.json({ message: "User deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
