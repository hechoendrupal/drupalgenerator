define([
        'backbone',
        '!model/generator'
    ],
    function(Backbone, ModelGenerator) {
        'use strict';

        var Generators = Backbone.Collection.extend({
            model: ModelGenerator
        });

        return Generators;
    });
