'use strict';
require('dotenv').config();

const superagent =  require('superagent');
const PORT = process.env.PORT || 3000;
const SERVER_URL = 'http://localhost:' + PORT;
const server = require('../index.js');
require('dotenv').config();


describe('CONTACT ROUTE', () => {
  test('Testing post route', (reject, resolve) => {
    let expected;
    superagent.post(`${SERVER_URL}/subscribe`)
      .end((err, res) => {
        expect(res.status).toBe(200);
        resolve();
      });
  });
});

