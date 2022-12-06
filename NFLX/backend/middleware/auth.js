const jwt = require('jsonwebtoken')
const config = require('config')

function auth(req, res, next) {
    // console.log(req.headers)
    const token = req.header("Authorization").split(" ")[1]

    if (!token) return res.status(401).json({ "ERROR": "Unauthorized User" })
    else {
        try {
            console.log("Decoded: ", jwt.verify(token, config.get("JwtSeceret")))
            const decode = jwt.verify(token, config.get("JwtSeceret"))
            console.log("Decoded here", decode)
            req.user = decode
            next();

        } catch (err) {
            res.status(400).json({ "ERROR": "Token not valid" })
        }

    }
}

module.exports = auth