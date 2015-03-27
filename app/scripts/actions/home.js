define([
        'backbone.marionette',
        '!view/home',
        '!view/header',
        '!view/collection/links',
        '!collection/links'
    ],
    function(Marionette, HomeView, HeaderView, LinksView, LinksCollection) {
        'use strict';

        var Home = function(app) {
            //console.log(app._regionManager);
            // Get region to render
            var regionMain = app._regionManager.get('main');
            var regionHeader = app._regionManager.get('header');

            // statements go here
            console.log("initialize a Home Action");

            var home = new HomeView({
                model: null
            });
            var header = new HeaderView({
                collection: null
            });

            var links = new LinksView({
                collection: LinksCollection
            });
            regionMain.show(home);
            regionHeader.show(links);

        };

        return Home;
    });
