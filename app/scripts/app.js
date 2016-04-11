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
  // @if DEBUG
  'ngMockE2E',
  'Mocks',
  // @endif
  'ui.router',
  'AppTemplates'
]).config(function ($stateProvider, $urlRouterProvider) {
  var Routes = {
    main: {
      name: 'main',
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }
  };
  $urlRouterProvider.otherwise(Routes.main.url);
  $stateProvider.state(Routes.main); //
});
