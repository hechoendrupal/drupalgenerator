define([
        'backbone.marionette',
        '!view/composite/generatorMenuGroup',
        'materialize'
    ],
    function (Marionette, GeneratorMenuGroupView) {
        'use strict';

        var menuGroupView = Marionette.CollectionView.extend({
            childView: GeneratorMenuGroupView,
            tagName: 'ul',
            className: 'collapsible',
            attributes: {
                'data-collapsible': 'accordion'
            },
            onShow: function () {
                $(function () {
                    $('.collapsible').collapsible({
                        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                    });
                });
            }
        });

        return menuGroupView;
    });
