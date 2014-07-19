'use strict';

/**
 * @ngdoc function
 * @name stoogeBloggerzApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the stoogeBloggerzApp
 */
angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, posts) {
    $scope.blogPosts = [
  { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
  { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
  { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
  { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
];


 });


 