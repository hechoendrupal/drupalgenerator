define([
    'backbone',
    'communicator',
    'regionManager',
    'regions'
], function(Backbone, Communicator, RegionManager, Regions) {
    var app = new Marionette.Application();

    app.addInitializer(function() {
        console.log('start');

        this._regionManager = new Marionette.RegionManager();

        Regions.init(this._regionManager)

        if (Backbone.history) {
            Backbone.history.start();
        }

        Communicator.mediator.trigger('APP:START');
    });

    return app;

});
