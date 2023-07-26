const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/register", (req, res) => {
  res.status(202).json(req.body);
});

app.post("/api/v1/login", (req, res) => {
  res.status(201).json(req.body);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
