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
  .post(upload.single('assets'), (req, res, next) => {
    console.log('GOT', req.file);
    
       next = path.extname(req.file.originalname);
    
       let params = {
           // access control list
           ACL: 'public-read',
           Bucket: process.env.AWS_BUCKET,
           Key: req.file.originalname,
           Body: fs.createReadStream(req.file.path)
       };
       console.log('uploading...');
       s3.upload(params, (err, s3Data) => {
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
