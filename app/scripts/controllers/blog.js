'use strict';

/**
 * @ngdoc function
 * @name stoogeBloggerzApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the stoogeBloggerzApp
 */
angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, posts, blog, authors) {

    $scope.blogPosts = blog.getPosts();
    $scope.authors = authors.getAuthors();

 });


 