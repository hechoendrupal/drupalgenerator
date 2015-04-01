define([
        'backbone',
    ],
    function(Backbone) {
        'use strict';

        var Command = Backbone.Model.extend({
            initialize: function(options) {
                console.log("initialize a Command model");
            }
        });

        return Command;
    });