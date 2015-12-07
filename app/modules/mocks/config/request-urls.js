'use strict';
/**
 * @file request-urls.js
 * @author Albert Cyberhulk
 * Contains url-s for mocks
 * @date 22/11/15
 */

/**
 * @ngdoc service
 * @type constant
 * @name RequestUrls
 * @description
 * Keeps URLS for HTTP Requests
 * Constant for tagging http requests as real or fake (property 'through').
 * true = real - Data are requested from real server
 * false = fake - Data are requested from fake backend
 * If 'through' = false, this have to have 'provider' property, with name of provider, who can returns mock data
 * @return {Object} that holds RequestUrls
 */
angular.module('Mocks').constant('RequestUrls', [
  {
    method: 'GET',
    url: '/api/posts',
    through: false,
    handler: function () {
      return [200, MockModels['posts']];
    }
  }
]); // END of constant
