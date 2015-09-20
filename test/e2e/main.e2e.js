'use strict';
/**
 * @file test.e2e.js
 * E2E test file for main controller js file
 * @author Albert Cyberhulk
 * @date 19.09.2015
 */
describe('Project example test', function() {
  it('Should have main container', function() {
    browser.get('http://127.0.0.1:9000/');
    var myElement = element(by.css('.container'));
    expect(myElement.isPresent()).toBe(true);
  });
});
