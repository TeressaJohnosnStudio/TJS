const router = require('express').Router();
const Blog = require('../models/Blog');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const multer = require('multer');
const upload = multer({ dest: 'upload/'});
const path = require('path');
const fs = require('fs');

router.route('/blog')
  .get((req, res) => {
    Blog.find()
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })
  .post(upload.single('image'), (req, res, next) => {

     console.log(req)
    let params = {
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET,
      Key: req.file.originalname,
      Body: fs.createReadStream(req.file.path)
    }

    console.log(params);

    s3.upload(params, (err, data) => {
      console.log(data);
      if(err) console.log(err);

      let post = {
        title: req.body.title,
        editorState: req.body.editorState,
        imageUrl: data.Location
      }

      Blog.create(post)
        .then(post => res.json(post))
        .catch(err => res.send(err));
    })
  });

router.route('/blog/:_id')
  .get((req, res) => {
    Blog.findById(req.body)
      .then(post => res.json(post))
      .catch(err => res.send(err))
  })
  .put((req, res) => {
    Blog.findByIdAndUpdate(req.params._id, req.body, { new: true })
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })
  .delete((req, res) => {
    Blog.findByIdAndDelete(req.params._id)
      .then(post => res.json(post))
      .catch(err => res.send(err));
  })

module.exports = router;
