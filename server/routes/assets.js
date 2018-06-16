require('dotenv').config();

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const router = require('express').Router();

const path = require('path');

const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

const Assets = require('../models/Assets');

router.route('/assets')
  .get((req, res) => {
    Assets.find()
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
  })
  .post(upload.single('asset'), (req, res, next) => {
    console.log('GOT', req.file);
    
       next = path.extname(req.file.originalname);
    
       let params = {
           ACL: 'public-read',
           Bucket: process.env.AWS_BUCKET,
           Key: req.file.originalname,
           Body: fs.createReadStream(req.file.path)
       };
       console.log('uploading...');
       s3.upload(params, (s3Data) => { // error functionality???
           console.log('uploaded', s3Data);
           let asset = new Asset({
               title: req.body.title,
               content: req.body.content,
               imageUrl: s3Data.Location
           });
           asset.save()
           .then((asset) => {
               console.log('saved', asset);
               res.send(asset);
           });
       }); 
  });

module.exports = router;
