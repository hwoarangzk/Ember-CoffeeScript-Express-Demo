(function() {
  App.Router.map(function() {
    this.resource('files', {
      path: '/files'
    });
    this.resource('create', {
      path: '/create'
    });
    return this.resource('file', {
      path: '/files/:fileName'
    });
  });

}).call(this);
