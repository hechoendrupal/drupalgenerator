define([
        'backbone',
    ],
    function(Backbone) {
        'use strict';

        var Empty = Backbone.Model.extend({

            initialize: function(options) {
                console.log("initialize a Empty model");

            }
        });

        return Empty;
    });