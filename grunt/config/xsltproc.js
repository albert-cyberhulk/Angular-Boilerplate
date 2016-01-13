'use strict';
/**
 * @file xsltproc.js
 *
 * @author Vladimir_Levin
 * @date 13.01.2016
 */
module.exports = {
  options: {
    stylesheet: 'test/yslow/pattern.xsl'
  },
  compile: {
    files: {
      'yslow/index.html': ['test/yslow/reports/yslow.xml']
    }
  }
};
