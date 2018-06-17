require('dotenv').config();

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
console.log("S3 OBJECT created" + s3[0]);
const multer = require('multer');
const upload = multer({ dest: 'upload/'});
const fs = require('fs');

const router = require('express').Router();

const path = require('path');

const Assets = require('../models/Assets');

router.route('/assets')
  .get((req, res) => {
    Assets.find()
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
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
        console.log('uploading...');
        // console.log('req file', req.file) 
        
       s3.upload(params, (err, s3Data) => { // error functionality???
            console.log("Attempting to upload to S3");
           if(err) console.log(err);

           console.log('HI')
           let asset = {
               title: req.file.originalname.split('.')[0],
               imageUrl: s3Data.Location
            };

            console.log('asset', asset);

            Assets.create(asset)
            .then(asset => res.json(asset))
            .catch(err => res.send(err))
       }); 
  });

module.exports = router;
