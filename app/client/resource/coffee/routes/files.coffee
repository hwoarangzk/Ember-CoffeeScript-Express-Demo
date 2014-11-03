App.FilesRoute = Em.Route.extend
	model: ->
		$.ajax({
			url: config.base + '/files'
		}).then (data) ->
			data
