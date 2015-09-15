"use strict";
/**
 * @file test.spec.js
 * test file for main controller js file
 * @author Albert Cyberhulk
 * @date 27.08.2015
 */

/**
 * @namespace MainCtrlTest
 * @returns {undefined}
 */
describe('MainCtrl', function () {
   beforeEach(function () {
     module('App');
   });
   var scope;
   var controller;
   var $httpBackend;
   var successCallback;
   var errorCallback;
   var promise;
   beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
     $httpBackend = _$httpBackend_;
     scope = $rootScope.$new();
     successCallback = jasmine.createSpy();
     errorCallback = jasmine.createSpy();
     controller = $controller('MainCtrl', {
       '$scope': scope
     });
   }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it("Should expect MainController to be initialized", function() {
    console.log(MockHttpResponseWrapper);
    expect(controller).toBeDefined();
  });

}); // END OF SPECS
