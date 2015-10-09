/**
 * @file preprocess.js
 * @author Albert Cyberhulk
 * @date 09/10/15
 */

module.exports = {
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
};
