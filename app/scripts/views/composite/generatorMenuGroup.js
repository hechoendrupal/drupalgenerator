define([
        'backbone.marionette',
        'twig',
        'text!template/generators-menu-group.html.twig',
        '!view/item/commandMenuLink',
        '!model/command'
    ],
    function(Marionette, Twig, GeneratorMenuGroupTemplate , CommandMenuLinkView, CommandModel) {
        'use strict';


        var GeneratorMenuGroupView = Marionette.CompositeView.extend({
            initialize: function() {
                console.log('link view');
                this.collection = this.model.get('commands');
            },
            template: function(data) {
                var template = Twig.twig({
                    data: GeneratorMenuGroupTemplate
                });
                return template.render(data);
            },
            tagName: 'li',
            childView : CommandMenuLinkView,
            childViewContainer: 'ul',
        });

        return GeneratorMenuGroupView;

    });
