'use strict';
/**
 * @file yslow_test.js
 *
 * @author Vladimir_Levin
 * @date 13.01.2016
 */
module.exports = {
  default_options: {
    options: {
      info: "grade",
      format: "junit",
      urls: ['http://localhost:9000'],
      reports: ['yslow/reports/yslow.xml']
    },
    files: []
  }
};
