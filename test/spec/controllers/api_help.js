'use strict';

describe('Controller: ApiHelpCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsTestApp'));

  var ApiHelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiHelpCtrl = $controller('ApiHelpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiHelpCtrl.awesomeThings.length).toBe(3);
  });
});
