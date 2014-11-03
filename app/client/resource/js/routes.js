(function() {
  App.CreateRoute = Em.Route.extend({
    setupController: function(controller) {
      controller.set('fileName', '');
      return controller.set('fileContent', '');
    }
  });

  App.FileRoute = Em.Route.extend({
    model: function(param) {
      var fileName;
      fileName = param.fileName;
      return $.ajax({
        url: config.base + '/read?name=' + fileName.replace(/\.txt$/, '')
      }).done(function(data) {
        return data;
      });
    }
  });

  App.FilesRoute = Em.Route.extend({
    model: function() {
      return $.ajax({
        url: config.base + '/files'
      }).then(function(data) {
        return data;
      });
    }
  });

  App.IndexRoute = Em.Route.extend({
    beforeModel: function() {
      return this.transitionTo('files');
    }
  });

}).call(this);
