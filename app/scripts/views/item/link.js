define([
        'backbone.marionette',
        'twig',
        'text!template/links.html.twig'
    ],
    function(Marionette, Twig, LinkTemplate) {
        'use strict';

        var LinkView = Marionette.ItemView.extend({
            initialize: function() {
                console.log('link view');
            },
            template: function(data) {
                var template = Twig.twig({
                    data: LinkTemplate
                });
                return template.render(data);
            }
        });

        return LinkView;

    });
