define([
        'backbone.marionette',
        'twig',
        'text!template/link-items.html.twig'
    ],
    function(Marionette, Twig, LinkItemTemplate) {
        'use strict';

        var LinkItemView = Marionette.ItemView.extend({
            initialize: function() {
                console.log('link view');
            },
            template: function(data) {
                var template = Twig.twig({
                    data: LinkItemTemplate
                });
                return template.render(data);
            }
        });

        return LinkItemView;

    });