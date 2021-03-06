const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.js');
const getAuth = require('../../client/library/authorization.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// let payload = authHeader.split('Basic ')[1];
// let decoded = Buffer.from(payload, 'base64').toString();
// let [username, password] = decoded.split(':');

// router.post('/signup', express.json(), (req, res) => {
//   User.create(req.body)
//     .then((user) => {
//       console.error('created user', user);
//       res.status(200).send(user);
//     })
//     .catch((err) => {
//       console.error('user not created', err);
//       res.sendStatus(400);
//     });
// });

router.get('/admin/login', (req, res) => {
  let [username, password] = getAuth(req, res);
  User.findOne({
    username
  }).then(user => {
    user.checkPassword(password).then(result => {
      if (result) {
        let data = {userId: user._id};
        let token = jwt.sign(data, process.env.SECRET, (err, newToken) => {
          res.status(200);
          res.send({
            signedIn: true,
            token: newToken,
          });
        });
      } else {
        res.status(401).send('please re-enter password');
      }
    });
  });
});

module.exports = router;