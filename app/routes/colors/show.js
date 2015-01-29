import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('colors', params.id);
  },

  actions: {
    destroy(model) {
      this.store.deleteRecord(model);
      this.transitionTo('colors');
    }
  }
});
