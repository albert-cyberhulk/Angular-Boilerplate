'use strict';
/**
 * @file cloudItem.js
 * directive for single cloud-item
 * @author Albert Stepanyan
 * @date 17.06.2014
 */

/**
 * @namespace app.directives
 * @class cloudItem
 * directive for controlling single Cloud Item
 * @param {Object} $log
 * @param {Object} $compile
 */
app.directives.directive("cloudItem", ['$log', '$compile', 
  function($log, $compile) {
  return {
      restrict: "AE",
      replace: true,
      scope: {
        tag: "@",
        title:"@",
        score:"@"
      },
      compile: function(cElem, cAttrs) {
        //linking function
        return function(lscope, lElem, lAttrs) {
          var curClass;
          if (lscope.score > 60) {
              curClass = "green";
          } else if (lscope.score < 40) {
              curClass = "red";
          } else {
              curClass = "gray";
          }
          var tag = "<h"+lscope.tag+" class='cloud "+curClass+"'>"+
                    lscope.title+"</h"+lscope.tag+">";
          lElem.html(tag);
          $compile(lElem.contents())(lscope);
        }
      }
  }    
}]);


