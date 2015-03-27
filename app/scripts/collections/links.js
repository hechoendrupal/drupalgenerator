define([
        'backbone',
        '!model/link'
    ],
    function(Backbone, ModelLink) {
        'use strict';

        var links = Backbone.Collection.extend({
            model: ModelLink
        });

        return links;
    });
