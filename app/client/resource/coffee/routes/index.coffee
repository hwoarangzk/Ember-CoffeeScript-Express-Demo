App.IndexRoute = Em.Route.extend
	beforeModel: ->
		@transitionTo 'files'