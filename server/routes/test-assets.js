require('dotenv').config();

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const express = require('express');
const router = new express.Router();

const path = require('path');

const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

const Asset = require('../models/Asset');

router.get('/assets', (req, res) => {
    if(req.query.id){
        Asset.findOne({_id: req.query.id}, (err, asset) => {
            res.send(asset);
        });
    } else {
        Asset.find()
        .then(asset => {
            res.send(asset);
        });
    }
});

router.post('/asset', upload.single('assset'), (req, res, next) => {
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
       let image = new Asset({
           title: req.body.title,
           content: req.body.content,
           imageUrl: s3Data.Location
       });
       image.save()
       .then((image) => {
           console.log('saved', image);
           res.send(image);
       });
   });                                                                                                                                          
});

module.exports = router;