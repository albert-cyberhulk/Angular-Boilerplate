/**
 * @file
 * @author Albert Cyberhulk
 * @date 13/10/15
 */
// Make sure JS code styles are up to par with ESLINT rules and there
// are no obvious mistakes
module.exports = {
  browserFiles: {
    src: [
      'Gruntfile.js',
      '<%= project.app %>/scripts/{,*/}*.js',
      '<%= project.app %>/mock/{,*/}*.js',
      '!<%= project.app %>/scripts/templates.js'
    ],
    options: {
      configFile: '.eslintrc'
    }
  },
  testFiles: {
    src: ['test/spec/{,*/}*.js', 'test/e2e/{,*/}*.js'],
    options: {
      configFile: 'test/.eslintrc'
    }
  }
};
