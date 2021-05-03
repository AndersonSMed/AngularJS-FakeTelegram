app.directive('activeContact', function() {
  return {
    scope: {
      contactInfo: '='
    },
    templateUrl: 'js/directives/activeContactDirective.html'
  }
})