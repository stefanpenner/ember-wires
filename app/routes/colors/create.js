import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('color');
  },

  actions: {
    create() {
      var model = this.modelFor('colors.create');

      model.save().then(() => {
        this.transitionTo('colors.show', model);
      });
    }
  }
});
