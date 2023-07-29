const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const { verifyToken } = require("./middlewares/verifyToken");

const { loginUser, registerUser } = require("./controllers/User");

const { protectedRoute } = require("./controllers/API");

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/register", registerUser);

app.post("/api/v1/login", loginUser);

app.use(verifyToken);

app.get("/api/v1/protectedRoute", verifyToken, protectedRoute);

const startApp = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    res.status(500).json({ message: "Server side error. Please try again" });
  }
};

startApp();
