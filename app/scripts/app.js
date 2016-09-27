'use strict';

/**
 * @ngdoc overview
 * @name angularJsTestApp
 * @description
 * # angularJsTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/api_help', {
        templateUrl: 'views/api_help.html',
        controller: 'ApiHelpCtrl',
        controllerAs: 'apiHelp'
      })
      .when('/api_meteo', {
        templateUrl: 'views/api_meteo.html',
        controller: 'ApiMeteoCtrl',
        controllerAs: 'apiMeteo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
