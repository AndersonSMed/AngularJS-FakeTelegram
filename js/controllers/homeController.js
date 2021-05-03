app.controller('HomeController', ['$scope', 'contacts', function($scope, contacts) {
  $scope.onSelectContact = function(index) {
    $scope.openContact = $scope.contacts[index];
  }
  $scope.openContact = null;
  contacts.then(function(data) {
    $scope.contacts = data;
  })
}])