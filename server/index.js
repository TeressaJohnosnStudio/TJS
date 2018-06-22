'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const webpack = require('webpack');
const compiler = webpack(require('../webpack.config.js'));
const middleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');
const instance = middleware(compiler);
const blogRouter = require('./routes/blog');
const assetsRouter = require('./routes/assets');
const bodyParser = require('body-parser');
const basicAuth = require('./routes/user.js');

app.use('client', express.static(`${__dirname}/client`));
app.use(instance);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', assetsRouter);
app.use('/api', basicAuth);
app.use('/api', blogRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/` });
})

instance.waitUntilValid(() => {
  // console.log('package is valid');
});

const PORT = process.env.PORT || 3000;
const server = (module.exports = {});

server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
     if(server.isOn) {
       return reject(new Error('Error, server is already on'))
     }

     server.http = app.listen(PORT, () => {
      //  console.log(`Listening to port ${PORT}`);
       server.isOn = true;
       mongoose.connect(process.env.MONGODB_URI);
       return resolve(server);
     })
  })
}

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn) {
      return reject(new Error('Error, server already stopped'));
    }

    server.http.close(() => {
      server.isOn = false;
      mongoose.disconnect();
      return resolve(server);
    })
  })
}
