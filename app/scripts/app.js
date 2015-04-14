define([
        'backbone.marionette',
        'router',
        'routes'
    ],
    function (Marionette, Router, Routes) {
        'use strict';

        var app = new Marionette.Application();
        app.addRegions({
            header: 'header',
            main: 'main',
            footer: 'footer'
        });

        app.on('start', function () {
            this._router = new Router({
                app: this
            });
            Routes.init(this._router);
            if (Backbone.history) {
                Backbone.history.start();
            }
        });

        return app;
    });
