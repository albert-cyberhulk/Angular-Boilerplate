'use strict';
/**
 * @file main.js
 * controller file that handles services -> model -> view control
 * @author Albert Stepanyan
 * @date 27.08.2014
 */

angular.module('App').controller('MainCtrl', ['$scope', 'Posts',
  function($scope, Posts) {

    /**
     * @property scope posts
     */
    $scope.posts = [];

    /**
     * @method getPosts
     * sample method to get posts in the app
     */
    $scope.getPosts = function() {
      Posts.getPosts().then(function(data) {
        $scope.posts = data;
      });
    };

    /**
     * @method ._init_ bootstraps controller
     */
    $scope._init_ = function() {
      // do bootstrap here
      $scope.getPosts();
    };

    $scope._init_();

  }
]);
