define([
        'backbone.marionette',
        '!view/home',
        '!view/layouts/header'
    ],
    function (Marionette, HomeView, HeaderLayout) {
        'use strict';

        var Home = function (app) {
            // Get region to render
            var regionMain = app._regionManager.get('main');
            var regionHeader = app._regionManager.get('header');

            var home = new HomeView({
                model: null
            });

            var header = new HeaderLayout({});

            regionMain.show(home);
            regionHeader.show(header);
        };

        return Home;
    });
