PhotoStock.CategoriesController = Ember.ArrayController.extend({

  viewingCategories: false,

  actions: {

    toggleCategories: function () {
      this.toggleProperty('viewingCategories');
    }

  }

});