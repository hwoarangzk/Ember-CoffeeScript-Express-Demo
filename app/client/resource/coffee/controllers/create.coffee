App.CreateController = Em.Controller.extend


	actions:
		save: ->

			self = this

			$.ajax({
				url: config.base + '/create',
				type: 'post',
				data: {
					fileName: @fileName,
					fileContent: @fileContent
				}
			}).done (data) ->
				alert data.msg
				self.transitionToRoute 'files' if data.code is 0
			.fail (data) ->
				alert data