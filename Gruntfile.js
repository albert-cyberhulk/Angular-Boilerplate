'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  //compile config from separate files
  var config = require('load-grunt-configs')(grunt, {
    config: {
      src: 'grunt/config/*.js'
    }
  });

  // Define the configuration for all the tasks
  grunt.initConfig(config);

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:tmp',
      'concurrent:server',  //'scsslint', 'sass', 'copy:styles', 'newer:jshint', 'eslint:browserFiles'
      'autoprefixer',
      'connect:livereload',
      'html2js',
      'watch'
    ]);

  });

  grunt.registerTask('e2e', [
    'protractor:run'
  ]);

  grunt.registerTask('api', [
    'mochaTest'
  ]);

  grunt.registerTask('test', [
    'scsslint',
    'newer:jshint:test',
    'eslint:testFiles',
    'clean:tmp',
    'concurrent:test', //sass copy:styles
    'html2js',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'checkDependencies',
    'clean:dist',
    'scsslint',
    'jshint:all',
    'html2js',
    'ngdocs',
    'useminPrepare',
    'concurrent:dist', //'sass', 'copy:styles', 'copy:mockImages', 'imagemin', 'svgmin', 'htmlmin'
    'autoprefixer',
    'test',
    'concat',
    'preprocess:html',
    'preprocess:js',
    'ngmin',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

};
