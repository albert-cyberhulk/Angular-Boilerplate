'use strict';
/**
 * @file main.js
 * controller file that handles services -> model -> view control
 * @author Albert Stepanyan
 * @date 27.08.2014
 */

angular.module('App').controller('MainCtrl', ['$scope', 'Posts', '$log',
  function ($scope, Posts, $log) {

    /**
     * @property scope posts
     */
    $scope.posts = [];

    /**
     * @method getPosts
     * sample method to get posts in the app
     */
    $scope.getPosts = function () {
      $scope.posts = Posts.query(function () {
        $log.debug($scope.posts);
      });
    };

    /**
     * @method ._init_ bootstraps controller
     */
    $scope._init_ = function () {
      // do bootstrap here
      $scope.getPosts();
    };

    $scope._init_();

  }
]);
