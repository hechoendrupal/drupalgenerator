define([
        'backbone.marionette',
        'twig',
        'text!template/links.html.twig',
        '!view/item/linkItem',
        '!model/linkItem'
    ],
    function(Marionette, Twig, LinkTemplate, LinkItemView, LinkItemModel) {
        'use strict';


        var LinkView = Marionette.CompositeView.extend({
            initialize: function() {
                console.log('link view');
                this.collection = this.model.get(LinkItemModel);
            },
            template: function(data) {
                var template = Twig.twig({
                    data: LinkTemplate
                });
                return template.render(data);
            },
            itemView : LinkItemView,
            itemViewContainer: 'ul'
        });

        return LinkView;

    });
