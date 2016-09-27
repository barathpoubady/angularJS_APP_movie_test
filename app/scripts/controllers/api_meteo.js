'use strict';

/**
 * @ngdoc function
 * @name angularJsTestApp.controller:ApiMeteoCtrl
 * @description
 * # ApiMeteoCtrl
 * Controller of the angularJsTestApp
 */
angular.module('angularJsTestApp')
  .controller('ApiMeteoCtrl', function ($scope, weatherData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.search = function(movieName) {
        
      var promise =  weatherData.getWeather(movieName);
      
      promise.then(function(results){

        $scope.films = results;

      }).catch(function(error){ 
          
          
      });
  
    };
    
  });
