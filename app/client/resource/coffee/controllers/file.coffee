App.FileController = Em.ObjectController.extend

	actions:
		save: ->
			self = this
			fileName = @get 'fileName'
			fileContent = @get 'fileContent'
			$.ajax({
				url: config.base + '/update',
				type: 'post',
				data: {
					fileName: fileName,
					fileContent: fileContent
				}
			}).done (data) ->
				alert data.msg
				self.transitionToRoute 'files' if data.code is 0