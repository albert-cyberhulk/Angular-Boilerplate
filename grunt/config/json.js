/**
 * @file json.js
 * @author Ashot Harutyunyan
 * @date 05/12/15
 */
var path = require('path');
module.exports = {
  main: {
    options: {
      namespace: 'MockModels',
      includePath: true,
      processName: function (filename) {
        return path.basename(filename.toLowerCase()).replace(/.[^.]+$/,'');
      }
    },
    src: ['app/modules/mocks/models/**/*.json'],
    dest: 'app/modules/mocks/models.js'
  }
};
