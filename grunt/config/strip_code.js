/**
 * @file strip_code.js
 *
 * @author Artur_Nizamutdinov
 * @date 1/29/2016
 */
module.exports = {
    options: {
      start_comment: 'start-test-block',
      end_comment: 'end-test-block'
    },
    your_target: {
      // a list of files you want to strip code from
      src: ".tmp/concat/scripts/*.js"
    }
};
