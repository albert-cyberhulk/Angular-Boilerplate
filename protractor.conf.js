'use strict';
/**
 * @file protractor.conf.js
 * @author Albert Cyberhulk
 * @date 28.10.2015
 */


var ScreenshotReporter = require('./test/e2e/utils/screenshotReporter.js');

exports.config = {
  specs: ['test/e2e/**/*.js'],
  capabilities: {
      browserName: 'phantomjs',
      'phantomjs.binary.path': require('phantomjs').path
  },
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      isVerbose: true
  },
  allScriptsTimeout: 20000,
  onPrepare: function () {
    browser.driver.manage().window().setSize(1366,768);
    jasmine.getEnv().addReporter(new ScreenshotReporter());
      //browser.driver.get('http://127.0.0.1:9000/');
  }

};
