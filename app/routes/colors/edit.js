import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('colors', params.id);
  },

  actions: {
    update(model) {
      model.save().then(() => {
        this.transitionTo('colors.show', model);
      });
    }
  }
});
