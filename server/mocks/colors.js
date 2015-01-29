module.exports = function(app) {
  var express = require('express');
  var Backbone = require('backbone');
  var fixture = require('../fixtures/colors.json');
  var collection = new Backbone.Collection(fixture);
  var colorsRouter = express.Router();

  var idCount = collection.length;

  colorsRouter.get('/', function(req, res) {
    res.send({ colors: collection.toJSON() });
  });

  colorsRouter.post('/', function(req, res) {
    var model = new Backbone.Model(req.body);
    model.set('id', ++idCount);
    collection.add(model);
    res.send({ color: model.toJSON() });
  });

  colorsRouter.get('/:id', function(req, res) {
    var model = collection.get(req.params.id);
    res.send({ color: model.toJSON() });
  });

  colorsRouter.put('/:id', function(req, res) {
    var model = collection.get(req.params.id);
    model.set(req.body);
    res.send({ color: model.toJSON() });
  });

  colorsRouter.delete('/:id', function(req, res) {
    var model = collection.get(req.params.id);
    collection.remove(model);
    res.send({ colors: collection.toJSON() });
  });

  app.use('/api/colors', colorsRouter);
};
