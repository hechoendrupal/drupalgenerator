define([
        'backbone.marionette',
        'twig',
        'text!template/form-section.html.twig'
    ],
    function (Marionette, Twig, FormSectionTemplate) {
        'use strict';

        var FormGeneratorView = Marionette.ItemView.extend({
            initialize: function(){
                console.log('initialize formGenerator view');
            },
            template: function (data) {
                var template = Twig.twig({
                    data: FormSectionTemplate
                });
                return template.render(data);
            }
        });

        return FormGeneratorView;
    });