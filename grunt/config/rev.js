/**
 * @file rev.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Renames files for browser caching purposes
module.exports = {
  dist: {
    files: {
      src: [
        '<%= project.dist %>/scripts/{,*/}*.js',
        '<%= project.dist %>/styles/{,*/}*.css',
        //'<%= project.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', // XXX TODO temporariry fix
        '<%= project.dist %>/styles/fonts/*'
      ]
    }
  }
};
