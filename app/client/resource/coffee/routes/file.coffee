App.FileRoute = Em.Route.extend

	model: (param) ->
		fileName = param.fileName
		$.ajax({
			url: config.base + '/read?name=' + fileName.replace(/\.txt$/, '')
		}).done (data) ->
			data