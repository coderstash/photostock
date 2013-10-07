PhotoStock.View = Ember.View.extend({

	didInsertElement: function() {
		Resize.resizeSections(this.$());
	}

});

PhotoStock.ColumnView = PhotoStock.View.extend({

	didInsertElement: function() {
		this._super();
	}

});

PhotoStock.FormView = PhotoStock.View.extend({

	didInsertElement: function() {
		this._super();
		this.$('input:first').focus();
	}

});