'use strict';
/**
 * @file mochaTest.js
 * grunt config file for mocha framework
 * @author Albert Cyberhulk
 * @date 11.11.2015
 */

module.exports = {
  all: {
    options: {
      reporter: 'list',
      captureFile: 'mocha.txt', // Optionally capture the reporter output to a file
      quiet: false, // Optionally suppress output to standard out (defaults to false)
      clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
    },

    src: ['test/api/{,*/}*.js']
  }
};
