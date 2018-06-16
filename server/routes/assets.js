require('dotenv').config();

const router = require('express').Router();
const Assets = require('../models/Assets');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

router.route('/assets')
  .get((req, res) => {
    Assets.find()
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
  })
  .post((req, res) => {
    Assets.create(req.body)
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
  });

module.exports = router;