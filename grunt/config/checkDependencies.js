/**
 * @file checkDependencies.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

module.exports = {
  options: {
    depsWereOk: false,
    packageDir: process.cwd(),
    scopeList: ['dependencies', 'devDependencies']
  },
  bower: {
    options: {
      packageManager: 'bower'
    }
  },
  npm: {
    options: {
      packageManager: 'npm'
    }
  }
};
