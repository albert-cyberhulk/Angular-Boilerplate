'use strict';
/**
 * @file underscore.js
 * angular's provider for underscore. very useful in tests
 * @author opa_oz
 * @date 20.04.2016
 */

/**
 * @namespace App
 * Wrapper for underscore
 * @class _
 * @return {Object}
 */
angular.module('App').provider('_', function () {
  /**
   * Make it available  as service
   */
  _.$get = _;

  return _;
});
