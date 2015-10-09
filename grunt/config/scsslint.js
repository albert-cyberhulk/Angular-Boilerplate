/**
 * @file scsslint.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

// Make sure SCSS code styles are up to par and there are no obvious mistakes
module.exports = {
  allFiles: [
    '<%= project.app %>/styles/{,*/}*.scss'
  ],
  options: {
    bundleExec: false,
    config: '.scss-lint.yml',
    reporterOutput: 'scss-lint-report.xml',
    colorizeOutput: true
  }
};
