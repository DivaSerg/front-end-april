var myApp = angular.module('simpleApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "js/components/simpleController/simplePage.html",
      controller: "SimpleController as sCtrl"
    })
    .state('result', {
      url: "/result",
      templateUrl: "js/components/simpleController/result.html",
      controller: "SimpleController as sCtrl"
    });
});