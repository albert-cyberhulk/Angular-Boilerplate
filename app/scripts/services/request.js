'use strict';
/**
 * @file request.js
 * handles Requests to Backend APIS
 * contains Ajax, Socker, and XMLRPC reques types
 * @author Albert Cyberhulk
 * @date 27.08.2014
 */

/**
 * @namespace app.services
 * @class Request
 * Angular factory service HTTP requests
 * @param {Object} $http
 * @param {Object} $log
 * @return {Object}
 */
app.services.factory('Request', ['$http', '$log', '$q',
  function($http, $log, $q) {
  return {
    internalHttpRequest: function(url, type, params) {
      var defer = $q.defer();
      if (typeof url !== 'string') {
        $log.error('Please pass string for url Param');
        return false;
      }
      if (typeof type !== 'string') {
        $log.error('Please pass string for type Param');
        return false;
      }
      var params = params || {};
      var conf = {
        method: type.toUpperCase(),
        url: url,
        cache: true,
        data: params
      };
      /**
       * Sending HTTP Request based on created Config Object
       * returning Promise $http Object
       */
       $http(conf).success(function(data) {
           defer.resolve(data);
       }).error(function(error, status, headers, config) {
           $log.info(error);
           defer.resolve(error);
       });
       return defer.promise;
    }

  };
}]);
