Package.on_use(function (api) {
	api.use(['templating', 'bootstrap-3', 'jqueryui'], 'client');

	api.add_files("lib/test.js", "client");
	api.add_files("lib/tabs.html", "client");
	api.add_files("lib/tabs.js", "client");
	api.add_files("lib/dash.html", "client");
	api.add_files("lib/dash.js", "client");
});