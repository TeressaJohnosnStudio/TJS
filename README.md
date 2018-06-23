# TJS
### Seattle area floral design website. 

## Developers: 
* Rafael Malave https://github.com/rmalave | https://www.linkedin.com/in/rafaelmalave/

* Ryan Johnson https://github.com/rjtj2007 | https://www.linkedin.com/in/ryan-scott-johnson/

* Daniel Pillay https://github.com/dpillay03 | https://www.linkedin.com/in/danielpillay/


## Overview
A MERN stack web application for a local small business. 

## Problem Domain
Rebuild a website for a client with modern architecture to feature our clients work, contact information, blog, and sales.

## Technologies: 
* React/Redux
* Mongodb
* Express
* Node
* AWS SDK
* Heroku
* Axios
* Nodemailer
* Material UI
* Multer
* Webpack

## Live Link: 
https://secure-dawn-11135.herokuapp.com/

## How to use: 
1. Clone the repo.
1. run ``npm i``.
1. touch ``.env`` file.
1. copy and paste below.
    ``` 
    PORT=3000
    MONGODB_URI=mongodb://localhost/tjs
    SECRET=<UNIQUE SECRET>

    EMAIL=<UNIQUE EMAIL>
    PASSWORD=<UNIQUE PASSWORD>

    AWS_BUCKET=<UNIQUE BUCKET>
    AWS_ACCESS_KEY_ID=<UNIQUE ID>
    AWS_SECRET_ACCESS_KEY=<UNIQUE KEY>
    ```
1. run ``mongod`` in terminal.
1. run ``nodemon`` or ``node index.js`` in terminal.

note: Mongodb needs to be installed on your machine. 