define([
        'backbone.marionette',
        '!model/linkItem'
    ],
    function(Marionette, ModelLinkItem) {
        'use strict';

        var linkItems = Backbone.Collection.extend({
            model: ModelLinkItem
        });

        return linkItems;
    });