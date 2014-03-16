define(function(require) {
  var Backbone = require('backbone');
  var _ = require('lodash');
  var AppTemplate = require('../templates/app');
  var ConfigModel = require('../models/config-model');
  var RouteModel = require('../models/route-model');
  var RouteView = require('./route-view');

  var AppView = Backbone.View.extend({

    childViews: [], // todo: move to app model
    configModel: null,

    initialize: function() {
      // todo: specify distance units
      this.configModel = ConfigModel.instance();
      this.listenTo(this.configModel, 'change', this.onModelChange);
    },

    // Rendering

    render: function() {
      this.$el.html(AppTemplate.renderSync());
      return this;
    },

    renderRoutes: function() {
      var self = this;
      var routes = this.configModel.routes();
      var routesDiv = this.$('#routes');
      routesDiv.empty();

      _.each(routes, function(route) {
        var routeView = new RouteView({
          model: new RouteModel(route)
        });

        self.childViews.push(routeView);
        routesDiv.append(routeView.render().el);
      });
    },

    // Events

    onModelChange: function() {
      this.renderRoutes();
    },

    // Methods

    bootstrap: function() {
      this.configModel.fetch();
    }

  });

  return AppView;
});