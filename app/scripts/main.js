/*global require*/
'use strict';

require.config({
    shim: {
        materialize:{
            deps: ['jquery', 'hammerjs', 'velocity']
        },
        app:{
            deps:['materialize']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        underscore: '../bower_components/lodash/dist/lodash',
        marionette: '../bower_components/marionette/lib/core/backbone.marionette',
        materialize: '../bower_components/materialize/bin/materialize',
        velocity: '../bower_components/materialize/js/velocity.min',
        hammerjs: '../bower_components/materialize/js/hammer.min'
    }
});
require(['app'],function (app){
    app.start();
});


/*
require([
    'backbone'
], function (Backbone,jQuery) {
    Backbone.history.start();
});
*/
