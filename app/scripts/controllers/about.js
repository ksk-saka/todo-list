'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoListApp
 */
angular.module('todoListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
