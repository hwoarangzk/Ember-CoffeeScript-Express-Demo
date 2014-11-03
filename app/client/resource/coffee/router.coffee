App.Router.map ->
	@resource 'files', {path: '/files'}
	@resource 'create', {path: '/create'}
	@resource 'file', {path: '/files/:fileName'}
