Package.on_use(function (api) {
	api.use(['templating'], 'client');

	api.add_files("lib/test.js", "client");
	api.add_files("lib/dash.html", "client");
	api.add_files("lib/dash.js", "client");
});