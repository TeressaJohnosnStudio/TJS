'use strict';
require('dotenv').config()
const express = require('express');
const app = express();
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.js'));
const middleware = require('webpack-dev-middleware');
const nodemailer = require('nodemailer')
const instance = middleware(compiler);


app.use('client', express.static(`${__dirname}/client`));
app.use(instance);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: `${__dirname}/`})
})

instance.waitUntilValid(() => {
    console.log('package is valid');
});

//NODEMAILER -- Contact Form: 

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// var mailOptions = {
//   from: process.env.EMAIL,
//   to: process.env.EMAIL,
//   subject: 'TEST EMAIL!',
//   text: 'It worked!!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log('YOU\'VE GOT ERROR!!', error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const server = require('./server');

server.start();

