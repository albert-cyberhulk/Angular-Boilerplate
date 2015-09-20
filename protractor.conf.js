'use strict';

exports.config = {
  specs: ['test/e2e/**/*.js'],
  capabilities: {
    browserName: 'phantomjs'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true
  },
  allScriptsTimeout: 20000,
  onPrepare: function() {
    browser.driver.get('http://127.0.0.1:9000/');
  }

};
