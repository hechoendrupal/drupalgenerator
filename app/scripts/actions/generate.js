define([
        'backbone.marionette',
        '!view/layouts/content',
        'session'
    ],
    function (Marionette, ContentLayout, Session) {
        'use strict';

        var Content = function (app) {
            // Get region to render
            //console.log(app);
            var regionMain = app._regionManager.get('main');

            var home = new ContentLayout({
                generator: app.generator
            });
            regionMain.show(home);

            app.trigger("header");
            console.log(Session);
            Session.init(app);
            /*console.log(app._router);
            app._router.navigate('home', { trigger: false });
*/
        };

        return Content;
    });
