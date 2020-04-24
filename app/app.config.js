'use strict';

angular.
  module('AngularJsChallenge').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/states', {
          template: '<states></states>',
        }).
        otherwise('/states');
    }
  ]);
