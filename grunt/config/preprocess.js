/**
 * @file
 * @author Albert Cyberhulk
 * @date 19/04/16
 */

module.exports = {
  options: {
    inline: true,
    context : {
      DEBUG: false
    }
  },
  prod : {
    src: [
      '<%= project.dist %>/index.html',
      '<%= project.dist %>/scripts/scripts.js'
    ]
  },
  dev: {
    src: [
      '<%= project.temp %>/index.html'
    ]
  }
};
