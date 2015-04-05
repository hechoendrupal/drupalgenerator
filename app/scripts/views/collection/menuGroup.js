define([
        'backbone.marionette',
        '!view/composite/generatorMenuGroup'
    ],
    function(Marionette, GeneratorMenuGroupView) {
        'use strict';

        var menuGroupView = Marionette.CollectionView.extend({
            childView: GeneratorMenuGroupView,
            tagName: 'ul',
            className : 'collapsible',
            attributes: {
                'data-collapsible': 'accordion'
            }
        });

        return menuGroupView;
    });
