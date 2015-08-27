'use strict';
/**
 * @file backend.js
 * mock backend implementation of the project api
 * responsible for request handling
 * and for generating response
 * @author Albert Stepanyan
 * @date 27.08.2014
 */

/**
 * @class MockBackend
 * contains logic for mock server side handling
 */
var MockBackend = MockBackend || {};
/**
 * @method serve
 * @param {Object} $httpBackend
 * @param {Object} $http
 * serves HTTP response to the front end
 * @returns {Object}
 */
MockBackend.serve = function ($httpBackend) {
  //Ignores the static file requests
  $httpBackend.whenGET(/.*\.(html|js|css)$/i).passThrough();
  //Request for someurl
  $httpBackend.whenGET('/topics').respond(function () {
    return [200, window.getHttpBackendMockData()];
  });
};

  angular.module('App').run(function($httpBackend, $http) {
     //Initializing mok backend server

     MockBackend.serve($httpBackend, $http);
  });
