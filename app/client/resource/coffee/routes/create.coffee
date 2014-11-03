App.CreateRoute = Em.Route.extend

	setupController: (controller) ->
		controller.set 'fileName', ''
		controller.set 'fileContent', ''