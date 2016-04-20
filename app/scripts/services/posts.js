'use strict';
/**
 * @file posts.js
 * applies to Request service and gets the posts
 * @author Albert Cyberhulk
 * @date 7.12.2015
 */

/**
 * @namespace app
 * @class Request
 * Angular factory service for posts data layer
 * @param {Object} $resource
 * @return {Object}
 */
angular.module('App').factory('Posts', ['$resource', function ($resource) {
  var postsUrl = 'http://private-5e4dd-angularboilerplate.apiary-mock.com/api/posts';
  // @if DEBUG
  postsUrl = '/api/posts';
  // @endif

  return $resource(postsUrl);
}]);
