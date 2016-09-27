'use strict';

/**
 * @ngdoc directive
 * @name angularJsTestApp.directive:movieImg
 * @description
 * # movieImg
 */
angular.module('angularJsTestApp')
  .directive('movieImg', function () {
    return {
      templateUrl: 'views/movieimgdirective.html',
      restrict: 'EA',
      template:false,
      scope:{
          movie : '=moviesList'
          
      }
      
    };
  });
