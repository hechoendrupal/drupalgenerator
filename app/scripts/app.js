define([
    'backbone',
    'marionette'
], function (Backbone,Marionette) {
    app = new Marionette.Application();
    app.on('start',function(){
        console.log('jala');
       if (Backbone.history) {
           Backbone.history.start();
       }
    });

    return app;

});
