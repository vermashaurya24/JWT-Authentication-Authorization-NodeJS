const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const exists = await user.findOne({ userName });
    if (exists) {
      return res
        .status(409)
        .json({ msg: "Username taken. Please choose a different username." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.create({
      userName,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const exists = await user.findOne({ userName });
    if (!exists) {
      return res.status(404).json({ msg: "User not found." });
    }
    const passwordValid = await bcrypt.compare(password, exists.password);

    if (!passwordValid) {
      return res.status(401).json({ msg: "Invalid password. Try again" });
    }

    const token = jwt.sign(
      { userId: exists._id, userName: exists.userName },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3600000,
      secure: true,
    });
    return res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { registerUser, loginUser };
