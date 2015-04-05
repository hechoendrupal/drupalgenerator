define([
        'backbone.marionette',
        'twig',
        'text!template/generators-menu-group.html.twig',
        '!view/item/commandMenuLink'
    ],
    function (Marionette, Twig, GeneratorMenuGroupTemplate, CommandMenuLinkView) {
        'use strict';

        var GeneratorMenuGroupView = Marionette.CompositeView.extend({
            initialize: function () {
                this.collection = this.model.get('commands');
            },
            template: function (data) {
                var template = Twig.twig({
                    data: GeneratorMenuGroupTemplate
                });
                return template.render(data);
            },
            tagName: 'li',
            childView: CommandMenuLinkView,
            childViewContainer: 'ul'
        });

        return GeneratorMenuGroupView;
    });
