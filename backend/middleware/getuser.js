const config = require('../config');
const jwt = require('jsonwebtoken');


const getuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ status: false, error: "Token mismatch" });
    }

    try {
        const JWT_SECRET = config.app.jwt_secret;
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({ status: false, error: "Token mismatch" });
    }
}

module.exports = getuser;

