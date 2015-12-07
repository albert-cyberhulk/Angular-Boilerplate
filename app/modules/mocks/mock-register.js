'use strict';
/**
 * @file mock-register.js
 * Main module file for Mocks
 * @author Albert Cyberhulk
 * @date 22.11.2015
 */
angular.module('Mocks').run(function (RequestUrls, $httpBackend) {
  // Looping through RequestUrls and handling them
  angular.forEach(RequestUrls, function (r) {
    if (r.through) {
      // for relative urls
      $httpBackend.when(r.method, new RegExp(r.url)).passThrough();
      // for absolute urls
      $httpBackend.when(r.method, new RegExp(urlBase + r.url)).passThrough();
    }
    $httpBackend.when(r.method, r.url).respond(r.handler);
  });

});
