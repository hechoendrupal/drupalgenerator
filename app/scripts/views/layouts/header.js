define([
        'backbone.marionette',
        'twig',
        'text!template/header.html.twig',
        '!view/collection/links',
        '!collection/links',
        '!collection/link-items'
    ],
    function(Marionette, Twig, HeaderTemplate, LinksView, LinksCollection, LinkItemsCollection) {
        'use strict';

        var linkscollection = new LinksCollection([1, 2, 3]);

        linkscollection.each(function(link){
            var linkItems = [];
            var linkItemsCollection = new LinkItemsCollection([1,2,3]);
            link.set('linkItem', linkItemsCollection);
        });

        var links = new LinksView({
            collection: linkscollection
        });

        var HeaderLayout = Marionette.LayoutView.extend({
            initialize: function() {
                console.log("initialize a Header LAyout");
            },
            template: function(data) {
                var template = Twig.twig({
                    data: HeaderTemplate
                });
                return template.render(data);
            },
            regions: {
                menu: '#main-menu'
            },
            onRender: function(){
                this.menu.show(links)// set up final bits just before rendering the view's `el`
            }

        });

        return HeaderLayout;

    });