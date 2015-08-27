'use strict';
/**
 * @file app.js
 * main bootstrap file og the application
 * defines namespaces and modules
 * configures providers for further processing
 * @author Albert Stepanyan
 * @date 16.06.2014
 */

/**
 * @namespace app
 * main namespace of the application
 */
var app = app || {};

/**
 * @namespace app.module
 * main module namespace of the app
 */
app.module = app.module || {};

/**
 * @namespace app.services
 * @class AppServices
 * services module of the app
 */
app.services = app.services || {};
app.services = angular.module('AppServices', []);

/**
 * @namespace app.controllers
 * @class AppControllers
 * controllers module of the app
 */
app.controllers = app.controllers || {};
app.controllers = angular.module('AppControllers', []);

/**
 * @namespace app.directives
 * @class AppDirectives
 * directives module of the app
 */
app.directives = app.directives || {};
app.directives = angular.module('AppDirectives', []);

/**
 * @class App
 * declaring main module of the application
 * dependencies:
 * ngRoute, ngMock, AppServices, AppControllers, AppDirectives
 */
app.module = angular.module('App', [
    'ngRoute',
    'ngMockE2E',
    'AppServices',
    'AppControllers',
    'AppDirectives'
  ])
  .config(function ($routeProvider) {
    //configuring application routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
 });
