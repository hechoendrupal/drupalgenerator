define([
        'backbone',
    ],
    function(Backbone) {
        'use strict';

        var link = Backbone.Model.extend({
            initialize: function() {
                alert("Welcome to this world");
            }
        });

        return link;
    });
