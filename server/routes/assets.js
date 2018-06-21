const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const multer = require('multer');
const upload = multer({ dest: 'upload/'});
const fs = require('fs');

const router = require('express').Router();

const path = require('path');

const Asset = require('../models/Asset');

router.route('/assets')
  .get((req, res) => {
    Assets.find()
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
      console.log('Assets', Assets)
  })
  .post(upload.single('image'), (req, res, next) => {
    // console.log('GOT req', req);
    
       next = path.extname(req.file.originalname);
    
       let params = {
           ACL: 'public-read',
           Bucket: process.env.AWS_BUCKET,
           Key: req.file.originalname,
           Body: fs.createReadStream(req.file.path)
       };
       console.log('uploading...', params);
       s3.upload(params, (err, s3Data) => {
           if(err) console.log(err);
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
