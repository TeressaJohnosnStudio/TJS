require('dotenv').config();

const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
const path = require('path');

const router = require('express').Router();

const Asset = require('../models/Asset');

router.route('/test')
    .post((req, res) => {
        console.log('hello', req.body);
        res.send('pong');
});

router.route('/assets')
  .get((req, res) => {
      console.log('inside .get');
    Asset.find({})
      .then(assets => res.json(assets))
      .catch(err => res.send(err));
  });


router.route('/assets')
  .post((req, res, next) => {
      console.log('GOT req', req.file);
    //   upload.single('asset')
  
       next = path.extname(req.file.originalname);
    
       let params = {
           ACL: 'public-read',
           Bucket: process.env.AWS_BUCKET,
           Key: req.file.originalname,
           Body: fs.createReadStream(req.file.path)
       };
        console.log('uploading...');
        
       s3.upload(params, (err, s3Data) => {
        console.log('uploaded', s3Data);
           if(err) console.log(err);

           console.log('HI')
           let asset = new Asset ({
            //    title: req.file.originalname.split('.')[0],
               imageUrl: s3Data.Location
            });
            console.log('asset', asset);

            Assets.create(asset)
            .then(asset => res.send(asset))
            .catch(err => res.send(err))
       }); 
  });

module.exports = router;
