'use strict';

angular.
  module('AngularJsChallenge').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/states', {
          template: '<states></states>',
        }).
        when('/states/:stateID', {
          template: '<h2>Hi</h2>',
        }).
        otherwise('/states');
    }
  ]);
