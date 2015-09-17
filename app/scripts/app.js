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
 * @namespace RxServices
 * @class AppServices
 * services module of the app
 */
angular.module('RxServices', []);

/**
 * @namespace RxControllers
 * @class AppControllers
 * controllers module of the app
 */
angular.module('RxControllers', []);

/**
 * @namespace RxDirectives
 * @class AppDirectives
 * directives module of the app
 */
angular.module('RxDirectives', []);

/**
 * @class App
 * declaring main module of the application
 * dependencies:
 * ngRoute, ngMock, AppServices, AppControllers, AppDirectives
 */
angular.module('App', [
  // @if DEBUG
  'ngMockE2E',
  // @endif
  'ui.router',
  'AppTemplates',
  //'RxConfig',
  'RxServices',
  'RxControllers',
  'RxDirectives'])
  .config(function () {

 });
