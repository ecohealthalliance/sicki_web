if (Meteor.isServer) {
	Meteor.startup(function () {

		collectionApi = new CollectionAPI({ authToken: '97f0ad9e24ca5e0408a269748d7fe0a0' });
		
		collectionApi.addCollection(References, 'references', {
		  // All values listed below are default
		  authToken: '97f0ad9e24ca5e0408a269748d7fe0a0',                   // Require this string to be passed in on each request
		  methods: ['GET'],  // Allow creating, reading, updating, and deleting
		});
		
		collectionApi.start();
	});
}