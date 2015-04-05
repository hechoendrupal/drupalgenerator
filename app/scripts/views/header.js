define([
        'backbone.marionette',
        'twig',
        'text!template/header.html.twig'
    ],
    function(Marionette, Twig, HeaderTemplate) {
        'use strict';

        var HeaderView = Marionette.ItemView.extend({
            template: function(data) {
                var template = Twig.twig({
                    data: HeaderTemplate
                });
                return template.render(data);
            }
        });

        return HeaderView;
    });
