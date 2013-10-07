PhotoStock.Router.map(function() {
	
	this.resource('categories', function() {
		this.resource('category', {path: ':category_id'}, function() {});
		this.route('new');
	});

});