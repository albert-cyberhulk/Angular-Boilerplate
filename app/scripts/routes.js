'use strict';
/**
 * @file routes.js
 * constant, that containts all routes of the application
 * @author opa_oz
 * @date 20.04.2016
 */
angular.module('App').constant('Routes', {
  main: {
    name: 'main',
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }
});
