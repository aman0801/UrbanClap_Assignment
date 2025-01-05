
const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());


let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// 1. Create a new user (POST /users)
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 2. Get all users (GET /users)
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// 3. Get a user by ID (GET /users/:id)
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// 4. Update a user (PUT /users/:id)
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { id: userId, name, email };
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// 5. Delete a user (DELETE /users/:id)
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
