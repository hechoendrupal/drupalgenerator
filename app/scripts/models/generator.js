define([
        'backbone',
    ],
    function(Backbone) {
        'use strict';

        var Generator = Backbone.Model.extend({
            initialize: function() {
                console.log("initialize a Generator model");
            }
        });

        return Generator;
    });
