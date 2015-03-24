define([
    'backbone',
    'marionette',
    'router',
    'routes',
    'communicator',
    'regionManager',
    'regions'
], function(Backbone, Marionette, Router, Routes, Communicator, RegionManager, Regions) {
    var app = new Marionette.Application();

    app.addInitializer(function() {
        console.log('start');

        this._regionManager = new Marionette.RegionManager();

        Regions.init(this._regionManager)

        // Initialize Router
    this._router = new Router({ App: this});

    // Set routes in router
    Routes.init(this._router);
    // Start routing system
    Backbone.history.start();

        if (Backbone.history) {
            Backbone.history.start();
        }

        Communicator.mediator.trigger('APP:START');
    });

    return app;

});
