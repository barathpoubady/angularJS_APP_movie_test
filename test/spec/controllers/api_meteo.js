'use strict';

describe('Controller: ApiMeteoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsTestApp'));

  var ApiMeteoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiMeteoCtrl = $controller('ApiMeteoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiMeteoCtrl.awesomeThings.length).toBe(3);
  });
});
