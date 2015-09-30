'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    project: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      templates: {
        files: [
          '<%= project.app %>/views/**/*.html',
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
          '<%= project.app %>/styles/**/*.scss',
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
    },

    // The actual grunt server settings
    connect: {
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
    },
    preprocess : {
      options: {
        inline: true,
        context : {
          DEBUG: false
        }
      },
      html : {
        src : [
          '<%= project.dist %>/index.html'
        ]
      },
      js : {
        src: '.tmp/concat/scripts/scripts.js'
      }
    },
    // Make sure JS code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= project.app %>/scripts/{,*/}*.js',
        '<%= project.app %>/mock/{,*/}*.js',
        '!<%= project.app %>/scripts/templates.js',
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js', 'test/e2e/{,*/}*.js']
      }
    },
    // Adding ng-docs
    ngdocs: {
      all: ['<%= project.app %>/scripts/**/*.js']
    },
    // Make sure SCSS code styles are up to par and there are no obvious mistakes
    scsslint: {
      allFiles: [
        '<%= project.app %>/styles/{,*/}*.scss',
      ],
      options: {
        bundleExec: false,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      },
    },
    // compiles scss files to css
    sass: {
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
    },
    // Empties folders to start fresh
    clean: {
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
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= project.dist %>/scripts/{,*/}*.js',
            '<%= project.dist %>/styles/{,*/}*.css',
            '<%= project.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= project.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    // Compiles angular templates to JS for fast load and user experience
    html2js: {
      options: {
        base: 'app',
        module: 'AppTemplates',
        singleModule: true,
        useStrict: true,
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      main: {
        src: ['<%= project.app%>/views/**/*.html'],
        dest: '<%= project.app%>/scripts/templates.js'
      }
    },


    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= project.app %>/index.html',
      options: {
        dest: '<%= project.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= project.dist %>/{,*/}*.html'],
      css: ['<%= project.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= project.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= project.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= project.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= project.dist %>/images'
        }, {
          expand: true,
          cwd: '<%= project.app %>/fonts',
          src: '{,*/}*.svg',
          dest: '<%= project.dist %>/fonts'
        }
      ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          // Optional configurations that you can uncomment to use
          // removeCommentsFromCDATA: true,
          // collapseBooleanAttributes: true,
          // removeAttributeQuotes: true,
          // removeRedundantAttributes: true,
          // useShortDoctype: true,
          // removeEmptyAttributes: true,
          // removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= project.app %>',
          src: ['*.html'],
          dest: '<%= project.dist %>'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
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
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
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
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // Karma settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true
      }
    },

    // Protractor settings
    protractor: {
      options: {
        keepAlive: true,
        configFile: 'protractor.conf.js'
      },
      run: {}
    }

  });

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
