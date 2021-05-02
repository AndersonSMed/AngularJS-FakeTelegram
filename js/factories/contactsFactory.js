app.factory('contacts', ['$http', function($http) {
  return $http.get('https://run.mocky.io/v3/c2c2e247-6011-41ec-bce7-867b4b2c4eca')
    .then(
      function (response) {
        return response.data;
      },
      function (err) {
        return err;
      }
    )
}])