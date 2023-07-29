const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Must provide a username."],
    trim: true,
    maxlength: [20, "Username should be less that 20 characters."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Must provide a password."],
    trim: true,
    maxlength: 200,
  },
});

module.exports = mongoose.model("user", UserSchema);
