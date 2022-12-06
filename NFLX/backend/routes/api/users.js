const express = require('express');
const { registerUser, findUser, getUsers } = require('../../users_mongodb');
const routes = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')

// routes.get('/', (req, res) => {
//     console.log("Retreing users data")
//     getUsers(req.body).then(result => {
//         res.json(result)
//     })
// })

routes.post('/', (req, res) => {
    console.log("POST REQUEST")
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ msg: "Please fill all fields" })
    }
    console.log(req.body)
    // const { name, email, password } = req.body
    findUser(req.body).then(user => {
        if (user) {
            console.log(user[0])
            return res.status(400).json({ "error": "user already registered" })
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) {
                        throw err
                    }
                    req.body.password = hash
                    registerUser(req.body).then(user => {
                        // res.send(`${user.name} Registered`)
                        jwt.sign(
                            { id: user._id },
                            config.get("jwtSeceret"),
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
})

module.exports = routes