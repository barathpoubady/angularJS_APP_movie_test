'use strict';

describe('Directive: movieImg', function () {

  // load the directive's module
  beforeEach(module('angularJsTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie-img></movie-img>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the movieImg directive');
  }));
});
