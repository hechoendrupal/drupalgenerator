define([
        'backbone.marionette',
        'twig',
        'text!template/command-menu-link.html.twig'
    ],
    function(Marionette, Twig, CommandMenuLinkTemplate) {
        'use strict';

        var CommandMenuLinkView = Marionette.ItemView.extend({
            initialize: function() {

            },
            template: function(data) {
                var template = Twig.twig({
                    data: CommandMenuLinkTemplate
                });
                return template.render(data);
            },
            tagName: 'li'
        });

        return CommandMenuLinkView;

    });