define([
        'backbone.marionette',
        '!view/layouts/header'
    ],
    function (Marionette, HeaderLayout) {
        'use strict';

        var Home = function (app) {
            // Get region to render
            var regionHeader = app._regionManager.get('header');

            var header = new HeaderLayout({});

            regionHeader.show(header);
        };

        return Home;
    });
