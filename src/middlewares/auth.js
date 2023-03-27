const jwt = require("jsonwebtoken");
const jwtSecret = require('../jwtSecret');

const authentication = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ message: 'To access this resource a valid authentication token must be sent.'})
    }

    const [, token] = authorization.split('Bearer ');

    if (!token) {
      return res.status(400).json({ message: 'To access this resource a valid authentication token must be sent.'})
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
      
        req.user = {
            id: decoded.id
        }
        
        return next()
    } catch(error) {
      return res.status(500).json({ message:  error.message});
    }
}

module.exports = authentication;