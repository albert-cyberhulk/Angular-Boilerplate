'use strict';
/**
 * @file screenshotReporter.js
 * responsible for screenshots in protractor
 * @author Albert Cyberhulk
 * @date 27.10.2015
 */

var fs = require('fs');

var deleteFolderRecursive = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

var ScreenshotReporter = function () {
  var path = __dirname + '/../screenshots/';
  deleteFolderRecursive(path);
  fs.mkdirSync(path);
  var index = 0;

  // base function to take a screenshot -- change path as needed
  var screenshot = function (testDescription, id) {
    var fPath = path + testDescription.replace(/[^a-zA-Z0-9.-]/g, '_') + '_' + id + '.png';
    browser.takeScreenshot().then(function (png) {
      var stream = fs.createWriteStream(fPath);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };

  // takes screenshot on each failed expect
  var originalAddMatcherResult = jasmine.Spec.prototype.addMatcherResult;
  jasmine.Spec.prototype.addMatcherResult = function () {
    ++index;
    if (!arguments[0].passed()) {
      screenshot(this.description, index);
    }
    return originalAddMatcherResult.apply(this, arguments);
  };

  // takes screenshot on each failed spec (including timeout)
  this.reportSpecResults = function (spec) {
    if (!spec.results().passed()) {
      screenshot(spec.description, 'end');
    }
    index = 0;
  };
};

module.exports = ScreenshotReporter;
