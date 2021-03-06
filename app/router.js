import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("colors", function() {
    this.route("create", {
      path: "new"
    });

    this.route("show", {
      path: ":id"
    });

    this.route("edit", {
      path: ":id/edit"
    });
  });
});

export default Router;
