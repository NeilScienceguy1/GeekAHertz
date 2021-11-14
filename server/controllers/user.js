const mongoose = require("mongoose");
const User = require("../models/User");

const accountController = (req, res) => {
  const { _id } = req.body;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        res.status(400).json({
          message: "User not found",
        });
      }
      return res.json(user);
    })
    .catch((err) => {
      return res.json(err);
    });
};

module.exports = accountController;
