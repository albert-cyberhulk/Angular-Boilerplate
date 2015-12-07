'use strict';
/**
 * @file mock-register.js
 * Main module file for Mocks
 * @author Albert Cyberhulk
 * @date 22.11.2015
 */
angular.module('Mocks').run(function ($injector, RequestUrls, $httpBackend) {
  var urlBase = '^(?:https?:)?(?:\/\/)?([^\/\?]+)';
  // Looping through RequestUrls and handling them
  angular.forEach(RequestUrls, function (r) {
    $httpBackend.when(r.method, new RegExp(urlBase + r.url)).respond(r.handler);
  });

});
