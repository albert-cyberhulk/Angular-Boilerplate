/**
 * @file watch.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Watches files for changes and runs tasks based on the changed files
module.exports = {
  templates: {
    files: [
      '<%= project.app %>/views/**/*.html'
    ],
    tasks: ['html2js']
  },
  js: {
    files: ['{.tmp,<%= project.app %>}/scripts/{,*/}*.js'],
    tasks: ['newer:jshint:all']
  },
  jsTest: {
    files: ['test/spec/{,**/}*.js', 'test/e2e/{,**/}*.js'],
    tasks: ['newer:jshint:test', 'karma']
  },
  sass: {
    files: [
      '<%= project.app %>/styles/**/*.scss'
    ],
    tasks: ['scsslint', 'sass', 'autoprefixer']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '<%= project.app %>/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= project.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
