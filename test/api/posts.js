'use strict';

/**
 * @file api.conf.js
 * Test file for mocha supertest
 * @author Albert Cyberhulk
 * @date 11.11.2015
 */
// Requiring NPM modules
var request = require('supertest');
// Express application framework
var express = require('express');
// Instance of express
var app = express();
// Mocking express
app.get('/user', function(req, res){
  res.send(200, { name: 'tobi' });
});
// Simple expectation from example
describe('GET /user', function(){
  it('respond with json', function(done){
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
