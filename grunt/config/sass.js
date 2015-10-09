/**
 * @file sass.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// compiles scss files to css
module.exports = {
  // target name
  src: {
    expand: true,
    cwd: '<%= project.app%>',
    src: [
      'styles/**/*.scss'
    ],
    dest: '.tmp/',
    ext: '.css'
  }
};
