'use strict';
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


//CONTACT PAGE - EMAIL:

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});