/**
 * @file concurrent.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Run some tasks in parallel to speed up the build process
module.exports = {
  server: [
    'scsslint',
    'sass',
    'copy:styles',
    'newer:jshint'
  ],
  test: [
    'sass',
    'copy:styles'
  ],
  dist: [
    'sass',
    'copy:styles',
    'copy:mockImages', // XXX TO DO Remove this when serving from real backend
    'imagemin',
    'svgmin',
    'htmlmin'
  ]
};
