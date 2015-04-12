define([
        'backbone.marionette',
        '!view/layouts/content'
    ],
    function (Marionette, ContentLayout) {
        'use strict';

        var Content = function (app) {
            // Get region to render
            var regionMain = app._regionManager.get('main');

            var home = new ContentLayout({
                generator: app.generator
            });

            regionMain.show(home);

        };

        return Content;
    });
