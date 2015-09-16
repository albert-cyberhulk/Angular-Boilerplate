'use strict';
/**
 * @file config.js
 * handles configuration in app
 * @author Albert Cyberhulk
 * @date 16.10.2015
 */

/**
 * @namespace app.services
 * @class Config
 */
var Injectables = (function() {

  return {
      serve: [
        'ngRoute',
        'ngMockE2E',
        //'RxConfig',
        'RxServices',
        'RxControllers',
        'RxDirectives'
      ],
      build: [
        'ngRoute',
        //'RxConfig',
        'RxServices',
        'RxControllers',
        'RxDirectives'
      ]
    };

})();
