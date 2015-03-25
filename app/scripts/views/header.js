define([
        'backbone.marionette',
        'twig',
        'text!template/header.html.twig'
    ],
    function(Marionette, Twig, HeaderTemplate) {
        'use strict';

        var HeaderView = Marionette.ItemView.extend({
            initialize: function() {
                console.log("initialize a Home Header");
            },
            template: function(data) {
                var template = Twig.twig({
                    data: HeaderTemplate
                });
                return template.render(data);
            }
        });

        return HeaderView;

    });
