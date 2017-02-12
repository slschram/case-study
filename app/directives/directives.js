'use strict';

var app = angular.module('myApp.directives', []);

var directives = [
  'product',
  'highlights',
  'purchasing',
  'review'
];

(directives).forEach(function (name) {
    app.directive(name, function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/' + name + '.html'
        };
    });
});
