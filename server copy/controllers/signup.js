const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


const signupController = (req, res) => {

    const { username, email, password, pfp } = req.body;

    User.findOne({ email: email }).then(user => {

        if (user) {
            res.status(400).json({
                error:"A user with this email already exists"
            })
        }

        User.findOne({username:username}).then(user2 => {

            if (user2) {
                res.status(400).json({
                  error: "A user with this username already exists",
                });               
            }

            bcrypt.hash(password, 12).then(hashedPassword => {

                const newUser = new User({
                    email:email,
                    password:hashedPassword,
                    username:username,
                    pfp:pfp
                })

                newUser.save().then(user => {
                    return res.json(user);
                }).catch(err => {
                    res.json(err)
                })
            })
        })
    })
}

module.exports = signupController;