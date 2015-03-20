define([
    'marionette',
    'backbone'
], function (Marionette, Backbone) {
    var app = new Marionette.Application();

    app.addRegions({
        headerRegion: 'header',
        mainRegion: 'main',
        footerRegion: 'footer'
    });

    app.navigate = function(route, options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    app.getCurrentRoute = function(){
        return Backbone.history.fragment
    };

    app.on('start', function () {
        console.log('start');
        if (Backbone.history) {
            Backbone.history.start();
        }
        /*if(this.getCurrentRoute() === ""){
            app.trigger("generate:module");
        }*/
    });

    return app;

});
