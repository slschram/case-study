'use strict';

// Declare app level module which depends on views and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',,
  'myApp.directives',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);