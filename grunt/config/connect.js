/**
 * @file connect.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// The actual grunt server settings
module.exports = {
  options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729
  },
  livereload: {
    options: {
      open: true,
      base: [
        '.tmp',
        '<%= project.app %>'
      ]
    }
  },
  test: {
    options: {
      port: 9001,
      base: [
        '.tmp',
        'test',
        '<%= project.app %>'
      ]
    }
  },
  dist: {
    options: {
      base: '<%= project.dist %>'
    }
  }
};
