/**
 * @file autoprefixer.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

module.exports = {
  options: {
    browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11']
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
