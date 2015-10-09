/**
 * @file autoprefixer.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '.tmp/styles/',
      src: '{,*/}*.css',
      dest: '.tmp/styles/'
    }]
  }
};
