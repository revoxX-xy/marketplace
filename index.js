const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Marketplace API jalan 🔥");
});

app.listen(3000, () => {
  console.log("Server jalan");
});
