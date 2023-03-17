const express = require('express');
const routes = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config');
const auth = require('../../middleware/auth');
const User = require('../../models/userModel');



routes.post('/', async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email })

    if (!userExists) {
        return res.status(400).json({ "Error": "User not registered!" })
    }
    else {
        bcrypt.compare(req.body.password, userExists.password).then(isMatch => {
            if (!isMatch) {
                res.status(400).json({ "Error": "Please enter correct credentials!" })
            }
            jwt.sign(
                { id: userExists._id },
                config.get("JwtSeceret"),
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        "user": {
                            "id": userExists._id,
                            "name": userExists.name,
                            "email": userExists.email,
                            "password": userExists.password
                        }
                    })
                }
            )
        })
    }
})

routes.get('/user', auth, (req, res) => {
    User.findById(req.user.id).then(user => {
        res.send(user)
    })
})

module.exports = routes