const express = require('express');
const routes = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/userModel');

routes.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).json({ "Error": "User already registered!" })
    }
    else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    throw err
                }
                req.body.password = hash

                User.create(req.body).then(user => {
                    jwt.sign(
                        { id: user._id },
                        config.get("JwtSeceret"),
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                "user": {
                                    "id": user._id,
                                    "name": user.name,
                                    "email": user.email,
                                    "password": user.password
                                }
                            })
                        }
                    )
                })
            })
        })
    }
})

module.exports = routes