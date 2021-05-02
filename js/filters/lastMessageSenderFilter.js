app.filter('lastMessageSender', function() {
  return function(sender) {
    if (!sender) return '';

    const splittedSender = sender.split(' ');
    return `${splittedSender[0]}:`;
  }
})