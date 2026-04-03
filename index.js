const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// home
app.get("/", (req, res) => {
  res.send("Marketplace API jalan 🔥");
});

// register
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({ username, password });

  res.json({ message: "Register berhasil" });
});

// login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login berhasil" });
  } else {
    res.json({ message: "Login gagal" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server jalan"));
