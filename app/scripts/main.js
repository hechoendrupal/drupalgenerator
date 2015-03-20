/*global require*/

require.config({
    shim: {
        materialize:{
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        backbone: '../bower_components/backbone/backbone',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        underscore: '../bower_components/lodash/dist/lodash',
        marionette: '../bower_components/marionette/lib/core/backbone.marionette',
        materialize: '../bower_components/materialize/bin/materialize'
    }
});
require([
    'app',
    'jquery',
    'materialize'
],function (App, $){
    $(function() {
        $('select').material_select();
        $(".button-collapse").sideNav();
    });
    App.start();
});
