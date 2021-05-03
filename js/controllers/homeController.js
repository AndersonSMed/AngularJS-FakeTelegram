app.controller('HomeController', ['$scope', 'contacts', function($scope, contacts) {
  $scope.isLoadingContacts = true;
  $scope.openContact = null;
  $scope.onSelectContact = function(index) {
    $scope.openContact = $scope.contacts[index];
  }

  contacts
    .then(function(data) {
      $scope.contacts = data;
    })
    .finally(function () {
      $scope.isLoadingContacts = false;
    })
}])