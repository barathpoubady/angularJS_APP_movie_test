'use strict';

/**
 * @ngdoc service
 * @name angularJsTestApp.weatherdata
 * @description
 * # weatherdata
 * Factory in the angularJsTestApp.
 */
angular.module('angularJsTestApp')
  .factory('weatherData', function ($http, $q) {

    function getWeather(movieName) {
        
        var deferred = $q.defer();
        
        $http({
            method:'GET',
            url:'http://www.omdbapi.com/?s='+movieName+''

        }).then(function(results){
            
            console.log(results);
            
            deferred.resolve(results.data.Search);
            
        }).catch(function(error){
            
            console.log(error);
            
            deferred.reject('Sorry this movie doesn\t exist !! ', error);
            
        });
        
        return deferred.promise;
     }

    // Public API here
    return {
      getWeather: getWeather
    };
  });
