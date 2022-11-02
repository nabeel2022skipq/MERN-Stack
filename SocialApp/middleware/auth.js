const jwt = require('jsonwebtoken')
const config = require('config')

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    if (!token) return res.status(401).json({ "ERROR": "Unauthorized User" })
    else {
        try {
            const decode = jwt.verify(token, config.get("JwtSeceret"))
            req.user = decode
            next();

        } catch (err) {
            res.status(400).json({ "ERROR": "Token not valid" })
        }

    }
}

module.exports = auth