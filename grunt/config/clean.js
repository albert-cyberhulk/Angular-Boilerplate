/**
 * @file clean.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Empties folders to start fresh
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        '<%= project.dist %>/*',
        '!<%= project.dist %>/.git*'
      ]
    }]
  },
  tmp: '.tmp'
};
