'use strict';

/**
 * @ngdoc function
 * @name angularJsTestApp.controller:ApiHelpCtrl
 * @description
 * # ApiHelpCtrl
 * Controller of the angularJsTestApp
 */
angular.module('angularJsTestApp')
  .controller('ApiHelpCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.msg = "I love AngularJS";
  });
