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
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'html2js',
      'watch'
    ]);
  });

  grunt.registerTask('e2e', [
    'protractor:run'
  ]);

  grunt.registerTask('test', [
    'scsslint',
    'newer:jshint:test',
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'checkDependencies',
    'scsslint',
    'newer:jshint:all',
    'test',
    'clean:dist',
    'ngdocs',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'html2js',
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
