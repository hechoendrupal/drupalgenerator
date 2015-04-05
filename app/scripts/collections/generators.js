define([
        'backbone',
        '!model/generator'
    ],
    function(Backbone, ModelGenerator) {
        'use strict';

        var Generators = Backbone.Collection.extend({
            model: ModelGenerator,
            url: 'scripts/command-generators.json',
            parse: function (data){
                return data.generators;
            }
        });

        return Generators;
    });
