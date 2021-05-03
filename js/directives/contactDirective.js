app.directive('contact', function() {
  return {
    scope: {
      contactInfo: '=',
      selected: '=',
      onSelect: '&'
    },
    templateUrl: 'js/directives/contactDirective.html'
  }
})