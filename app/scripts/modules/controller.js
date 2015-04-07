define([
        'backbone.marionette',
        '!action/home',
        '!action/generate'
    ],
    function (Marionette, Home, Generate) {
        'use strict';

        var Controller = Marionette.Controller.extend({
            initialize: function (options) {
                // store a regions that will be used to show the stuff rendered by this components
                this.app = options.app;
            },
            home: function () {
                return Home(this.app);
            },
            generate: function () {
                return Generate(this.app);
            }
        });

        return Controller;
    });
