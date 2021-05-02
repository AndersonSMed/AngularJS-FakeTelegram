app.controller('HomeController', ['$scope', 'contacts', function($scope, contacts) {
  contacts.then(function(data) {
    $scope.contacts = data;
  })
}])