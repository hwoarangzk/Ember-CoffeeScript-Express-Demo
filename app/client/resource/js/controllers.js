(function() {
  App.CreateController = Em.Controller.extend({
    actions: {
      save: function() {
        var self;
        self = this;
        return $.ajax({
          url: config.base + '/create',
          type: 'post',
          data: {
            fileName: this.fileName,
            fileContent: this.fileContent
          }
        }).done(function(data) {
          alert(data.msg);
          if (data.code === 0) {
            return self.transitionToRoute('files');
          }
        }).fail(function(data) {
          return alert(data);
        });
      }
    }
  });

  App.FileController = Em.ObjectController.extend({
    actions: {
      save: function() {
        var fileContent, fileName, self;
        self = this;
        fileName = this.get('fileName');
        fileContent = this.get('fileContent');
        return $.ajax({
          url: config.base + '/update',
          type: 'post',
          data: {
            fileName: fileName,
            fileContent: fileContent
          }
        }).done(function(data) {
          alert(data.msg);
          if (data.code === 0) {
            return self.transitionToRoute('files');
          }
        });
      }
    }
  });

  App.FilesController = Em.ArrayController.extend({
    actions: {
      del: function(file) {
        var self;
        self = this;
        return $.ajax({
          url: config.base + '/delete?name=' + file.fileName + '.txt',
          type: 'delete'
        }).then(function(data) {
          alert(data.msg);
          if (data.code === 0) {
            return self.removeAt(self.indexOf(file));
          }
        }).fail(function(data) {
          return alert(data);
        });
      },
      edit: function(fileName) {
        return console.log(fileName);
      }
    }
  });

}).call(this);
