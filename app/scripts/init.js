
require.config({

    /* starting point for application */
    deps: ['backbone.marionette', 'main'],
    shim: {
        materialize: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        backbone: '../bower_components/backbone/backbone',
        'backbone.marionette': '../bower_components/marionette/lib/core/backbone.marionette',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        underscore: '../bower_components/lodash/dist/lodash',
        materialize: '../bower_components/materialize/bin/materialize',
        twig: '../bower_components/twig.js/twig',

        text: '../bower_components/requirejs-text/text',
        template: 'templates',
        view: 'views',
        action: 'actions',
        module: 'modules',
        collection: 'collections',
        model: 'models'
    }
});
