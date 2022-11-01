const express = require('express');
const { findUser, findUserByID } = require('../../users_mongodb');
const routes = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config');
const auth = require('../../middleware/auth');



routes.post('/', (req, res) => {
    console.log("POST REQUEST")
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "Error": "Please fill all fields" })
    }
    findUser(req.body).then(user => {
        if (!user) {
            return res.status(400).json({ "Error": "user does not registered!" })
        }
        else {
            bcrypt.compare(req.body.password, user.password).then(isMatch => {
                if (!isMatch) {
                    res.status(400).json({ "Error": "Please enter correct credentials" })
                }
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
        }
    })
})

routes.get('/user', auth, (req, res) => {
    findUserByID(req.user.id).then(user => {
        console.log(req.user.id)
        res.send(user)
    })
})

module.exports = routes