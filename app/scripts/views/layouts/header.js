define([
        'backbone.marionette',
        'twig',
        'text!template/header.html.twig',
        '!view/composite/generatorMenuGroup',
        '!view/collection/menuGroup',
        '!collection/generators',
        '!collection/commands',
        'materialize'
    ],
    function (Marionette, Twig, HeaderTemplate, GeneratorMenuGroupView, MenuGroupView, GeneratorsCollection, CommandsCollection) {
        'use strict';

        var HeaderLayout = Marionette.LayoutView.extend({
            initialize: function () {
                var self = this;
                this.generators = new GeneratorsCollection();
                this.generators.fetch({
                    success: function (collection) {
                        collection.each(function (generator) {
                            var commands = generator.get('commands');
                            var commandsCollection = new CommandsCollection(commands);
                            generator.set('commands', commandsCollection);
                        });
                        self.menuGroupView = new MenuGroupView({
                            collection: self.generators
                        });
                        self.render();
                        self.menu.show(self.menuGroupView);

                    }
                });
            },
            template: function (data) {
                var template = Twig.twig({
                    data: HeaderTemplate
                });
                return template.render(data);
            },
            regions: {
                menu: '#main-menu'
            },
            onRender: function () {
                $(function () {
                    $(".button-collapse").sideNav();
                });
            }

        });

        return HeaderLayout;
    });