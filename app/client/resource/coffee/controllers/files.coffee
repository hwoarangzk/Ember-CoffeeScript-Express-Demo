App.FilesController = Em.ArrayController.extend
	actions:
		del: (file) ->
			self = this
			$.ajax({
				url: config.base + '/delete?name=' + file.fileName + '.txt',
				type: 'delete'
			}).then (data) ->
				alert data.msg
				if data.code is 0
					self.removeAt(self.indexOf(file))
			.fail (data) ->
				alert data

		edit: (fileName) ->
			console.log fileName