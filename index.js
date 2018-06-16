'use strict';
require('dotenv').config()
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 



// NODEMAILER -- Contact Form: 
var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  app.post('/', (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n subject: ${content} \n ${message} `
  
    let mail = {
      from: name,
      to: process.env.EMAIL, 
      subject: subject,
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
const server = require('./server');
server.start();

