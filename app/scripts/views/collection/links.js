define([
        'backbone.marionette',
        '!view/item/link'
    ],
    function(Marionette, ViewLink) {
        'use strict';

        var LinksView = Marionette.CollectionView.extend({
            childView: ViewLink
        });

        return LinksView;

    });
