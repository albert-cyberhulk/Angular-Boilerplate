/**
 * @file mins.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

//minification com
module.exports.tasks = {

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

  ngAnnotate: {
    options: {
      singleQuotes: true
    },
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/concat/scripts',
        src: '*.js',
        dest: '.tmp/concat/scripts'
      }]
    }
  }
};
