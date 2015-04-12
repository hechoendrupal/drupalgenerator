define([
        'backbone.marionette',
        'backbone.forms',
        'twig',
        'text!template/content.html.twig',
        'text!template/form-section.html.twig',
        '!view/item/formGenerator',
        '!collection/formGenerators'
    ],
    function (Marionette, Form, Twig, ContentTemplate, FormSectionTemplate, FormGeneratorView, FormGeneratorsCollection) {
        'use strict';

        var ContentLayout = Marionette.LayoutView.extend({
            initialize: function(){
                var self = this;
                this.collection = new FormGeneratorsCollection();
                this.collection.fetch({
                    success: function (collection) {
                        var generator = collection.findWhere({machine_name:self.options.generator});
                        self.form = new Backbone.Form({
                            schema: generator.get('schema'),
                            template: function (data) {
                                var template = Twig.twig({
                                    data: FormSectionTemplate
                                });
                                return template.render(data);
                            }
                        });

                        self.render();
                        self.sections.show(self.form);
                    }
                });
            },
            template: function (data) {
                var template = Twig.twig({
                    data: ContentTemplate
                });
                return template.render(data);
            },
            regions: {
                sections: '#sections'
            },
            onRender: function () {

            }
        });

        return ContentLayout;
    });
