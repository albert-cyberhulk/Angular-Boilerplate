/**
 * @file html2js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Compiles angular templates to JS for fast load and user experience
module.exports = {
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
};
