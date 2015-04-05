define([
        'backbone.marionette',
        'twig',
        'text!template/header.html.twig',
        '!view/composite/generatorMenuGroup',
        '!view/collection/menuGroup',
        '!collection/generators',
        '!collection/commands'
    ],
    function(Marionette, Twig, HeaderTemplate, GeneratorMenuGroupView, MenuGroupView, GeneratorsCollection, CommandsCollection) {
        'use strict';

var source = {
    "generators": [

        {
            "id": "1",
            "category": "generators",
            "name": "Generators",
            "commands": [
                {
                    "name": "Module"
                },
                {
                    "name": "Controller"
                },
                {
                    "name": "Permissions"
                },
                {
                    "name": "Service"
                },
                {
                    "name": "Entity"
                },
                {
                    "name": "Form Config"
                }   
            ]
        },
        {
            "id": "2",
            "category": "plugin_generators",
            "name": "Plugin Generators",
            "commands": [
                {
                    "name": "Block"
                },
                {
                    "name": "Image Effect"
                },
                {
                    "name": "REST Resource"
                }   
            ]
        },
        {
            "id": "3",
            "category": "third_generators",
            "name": "Third Generators",
            "commands": [
                {
                    "name": "Plugin Rules Action"
                }   
            ]
        }
        
    ]
};

        /*var linkscollection = new LinksCollection([1, 2, 3]);

        linkscollection.each(function(link){
            var linkItems = [];
            var linkItemsCollection = new LinkItemsCollection([1,2,3]);
            link.set('linkItem', linkItemsCollection);
        });

        var menuGroup = new MenuGroupView({
            collection: linkscollection
        });*/
                

        var HeaderLayout = Marionette.LayoutView.extend({
            initialize: function() {
                console.log("initialize a Header LAyout");
                var self = this;
                this.generators = new GeneratorsCollection();
                this.generators.fetch({
                    success: function(collection){
                        collection.each(function (generator){
                            var commands = generator.get('commands');
                            var commandsCollection = new CommandsCollection(commands);
                            generator.set ('commands', commandsCollection);
                        });
                        self.menuGroupView = new MenuGroupView({
                            collection : self.generators
                        });
                        self.render();
                        self.menu.show(self.menuGroupView);

                    }
                });
                
            },
            template: function(data) {
                var template = Twig.twig({
                    data: HeaderTemplate
                });
                return template.render(data);
            },
            regions: {
                menu: '#main-menu'
            }

        });

        return HeaderLayout;

    });
/*

 var HeaderLayout = Marionette.LayoutView.extend({
 initialize: function() {
 console.log("initialize a Header LAyout");
 var self = this;
 self.generators = new GeneratorsCollection();
 self.generators.fetch({
 success: function(collection){
 collection.each(function (generator){
 var commands = generator.get('commands');
 var commandsCollection = new CommandsCollection(commands);
 generator.set ('commands', commandsCollection);
 });
 self.render();
 }
 });
 */
/*self.menuGroupView = new MenuGroupView({
 collection : this.generators
 });*//*

 */
/*generators.each(function (generator){
 var commands = generator.get('commands');
 var commandsCollection = new CommandsCollection(commands);
 generator.set ('commands', commandsCollection);
 });*//*

 */
/*
 *//*

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
 var menuGroupView = new MenuGroupView({
 collection : this.generators.toJSON()
 });
 this.menu.show(menuGroupView);
 }
 */