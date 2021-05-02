var app = angular.module('fakegram', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'js/views/homeView.html'
    })
    .otherwise({
      redirectToUrl: '/'
    })
}])