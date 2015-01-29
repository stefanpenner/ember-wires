import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      this.get('model').save().then((color) => {
        this.send('colorWasCreated', color);
      });
    }
  }
});
