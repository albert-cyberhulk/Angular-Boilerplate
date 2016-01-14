'use strict';
/**
 * @file xsltproc.js
 *
 * @author Vladimir_Levin
 * @date 13.01.2016
 */
module.exports = {
  options: {
    stylesheet: 'pattern.xsl'
  },
  compile: {
    files: {
      'yslow/index.html': ['yslow/reports/yslow.xml']
    }
  }
};
