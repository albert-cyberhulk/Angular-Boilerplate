/**
 * @file jshint.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Make sure JS code styles are up to par and there are no obvious mistakes
module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: {
    src: [
      'Gruntfile.js',
      '!/bower_components',
      '<%= project.app %>/**/scripts/**/*.js',
      '!<%= project.app %>/**/templates.js',
      '!<%= project.app %>/modules/mocks/models.js'
    ]
  },
  test: {
    options: {
      jshintrc: 'test/.jshintrc'
    },
    src: ['test/spec/{,*/}*.js', 'test/e2e/{,*/}*.js']
  }
};
