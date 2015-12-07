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
 * @param {Object} Request
 * @return {Object}
 */
angular.module('App').factory('Posts', ['Request', '$log', function() {
  return {
    'name': 1,
    'surname': 2
  };
}]);
