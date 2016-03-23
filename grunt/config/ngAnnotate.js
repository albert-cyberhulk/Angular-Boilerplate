/**
 * @file ngAnnotate.js
 * @author Marnix Harderwijk
 * @date 23.03.2016
 */

// Empties folders to start fresh
module.exports = {
  ngAnnotate: {
    options: {
      remove: true,
      add: true,
      singleQuotes: true
    },
    files: [{
      expand: true,
      src: ['<%= project.app %>/scripts/**/*.js'],
      extDot: 'last'
    }],
  }
};
