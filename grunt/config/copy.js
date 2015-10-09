/**
 * @file copy.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Copies remaining files to places other tasks can use
module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= project.app %>',
      dest: '<%= project.dist %>',
      src: [
        '*.{ico,png,txt}',
        '.htaccess',
        'images/{,*/}*.{webp}',
        'fonts/*',
        '!**/views/**'
      ]
    }, {
      expand: true,
      cwd: '.tmp/images',
      dest: '<%= project.dist %>/images',
      src: [
        'generated/*'
      ]
    }]
  },
  styles: {
    expand: true,
    cwd: '<%= project.app %>/styles',
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  },
  fonts: {
    expand: true,
    cwd: '<%= project.app %>/fonts',
    dest: '<%= project.dist %>/fonts/',
    src: '{,*/}*.**'
  },
  // XXX TO DO remove this when the application starts working with backend
  mockImages: {
    expand: true,
    cwd: '<%= project.app %>/mock/images',
    dest: '<%= project.dist %>/mock/images/',
    src: '{,*/}*.**'
  }
};
