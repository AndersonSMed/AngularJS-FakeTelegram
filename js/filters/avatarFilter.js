app.filter('avatar', function() {
  return function(name) {
    const splittedName = name ? name.split(' ') : ['', ''];

    if (splittedName.length === 1) {
      return splittedName[0][0];
    } else {
      return `${splittedName[0][0]}${splittedName[1][0]}`;
    }
  }
})