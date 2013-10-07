PhotoStock.CategoryRoute = Ember.Route.extend({
	model: function(params) {
		return {} //$.getJSON("http://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=1d3f638266b311fd0d489aa7437eff6a&format=json&tags=" + params);
	}
});