'use strict';
/**
 * @file app.js
 * main bootstrap file og the application
 * defines namespaces and modules
 * configures providers for further processing
 * @author Albert Stepanyan
 * @date 16.09.2015
 */

/**
 * @namespace Mocks
 * @class Mocks
 * Mocks module of the app
 */
angular.module('Mocks', []);

/**
 * @class App
 * declaring main module of the application
 * dependencies:
 * ngRoute, ngMock, AppServices, AppControllers, AppDirectives
 */
angular.module('App', [
  /* @if NODE_ENV=='development' */
  'ngMockE2E',
  'Mocks',
  /* @endif */
  'ui.router',
  'ngResource',
  'AppTemplates'
]).config(['$stateProvider', '$urlRouterProvider', 'Routes', '_Provider', function ($stateProvider, $urlRouterProvider, Routes, _) {
  /*Set default path*/
  $urlRouterProvider.otherwise(Routes.main.url);

  /**
   * Register all routes from constant
   */
  _.forEach(Routes, function (value, key) {
    if (_.has(Routes, key)) {
      $stateProvider.state(value);
    }
  });
}]);
