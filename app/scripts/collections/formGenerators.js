define([
        'backbone',
        '!model/generator'
    ],
    function (Backbone, ModelGenerator) {
        'use strict';

        var FormGenerators = Backbone.Collection.extend({
            model: ModelGenerator,
            url: 'scripts/command-generators.json',
            parse: function (data) {
                var allData = _.clone(data.generators);
                var allCommands = _.flatten(_.pluck(allData,'commands'));
                return allCommands;
            }
        });

        return FormGenerators;
    });
