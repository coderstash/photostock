PhotoStock.Model = Ember.Model.extend();

PhotoStock.Model.reopenClass({
  adapter: Ember.RESTAdapter.create()
});

PhotoStock.LocalStorageModel = Ember.Model.extend();

PhotoStock.LocalStorageModel.reopenClass({
  adapter: PhotoStock.LocalStorageAdapter.create(),
  localStorageAllowedLifespanMinutes: 720, //12 hours
  localStorageSlidingExpiration: false // only last the allowed lifespan no matter what
});