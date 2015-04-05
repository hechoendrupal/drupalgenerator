define([
        'backbone.marionette',
        'twig',
        'text!template/generators-menu-group.html.twig',
        '!view/item/commandMenuLink',
        'materialize'
    ],
    function(Marionette, Twig, GeneratorMenuGroupTemplate , CommandMenuLinkView) {
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
            onShow: function(){
                $(function() {
                    $('.collapsible').collapsible({
                        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                    });
                });
            }
        });

        return GeneratorMenuGroupView;

    });
