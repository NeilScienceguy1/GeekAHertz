const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const loginController = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      res.status(400).json({
        error: "A user with this email doesn't exist",
      });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.json({
          message: "You are logged in",
          user: user,
        });
      } else {
        res.status(400).json({
          error: "Incorrect password",
        });
      }
    });
  });
};

module.exports = loginController;
