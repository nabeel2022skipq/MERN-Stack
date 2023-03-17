const jwt = require('jsonwebtoken')
const config = require('config')

function auth(req, res, next) {
    // console.log(req.headers)
    const token = req.header("Authorization")

    if (!token) return res.status(400).json({ "ERROR": "Unauthorized User Found." })
    else {
        try {
            const decode = jwt.verify(token.split(" ")[1], config.get("JwtSeceret"))
            req.user = decode
            next();

        } catch (err) {
            res.status(400).json({ "ERROR": "Token not valid" })
        }

    }
}

module.exports = auth