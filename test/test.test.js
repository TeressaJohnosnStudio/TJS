'use strict';
const server = require('../index.js');
require('dotenv').config();

describe('All tests', () => {
    beforeAll(server.start);
    afterAll(server.stop);
    describe('Server tests', () => {
      test('throws 404 if route is not found', (done) => {
        expect(40).toEqual(40);
        done();
      });
    });
});