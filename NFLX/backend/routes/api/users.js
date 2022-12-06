const express = require('express');
const { registerUser, findUser } = require('../../users_mongodb');
const routes = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')

routes.post('/', (req, res) => {
    console.log("POST REQUEST")
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.image) {
        return res.status(400).json({ msg: "Please fill all fields" })
    }
    // const { name, email, password } = req.body
    findUser(req.body).then(user => {
        if (user) {
            return res.status(400).json({ "Error": "User already registered!" })
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) {
                        throw err
                    }
                    req.body.password = hash
                    registerUser(req.body).then(user => {
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
                                        "password": user.password,
                                        "image": user.image
                                    }
                                })
                            }
                        )
                    })
                })
            })
        }
    })
})

module.exports = routes