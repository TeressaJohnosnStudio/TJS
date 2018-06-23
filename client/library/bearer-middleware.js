const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
require('dotenv').config();


module.exports = (req, res, next) => {
  let authHeader = req.get('Authorization');
  let token = authHeader.split('Bearer ')[1];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send('invalid token');
    }
    User.findOne({_id: decoded.userId })
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => res.send(err.message));
  });
};