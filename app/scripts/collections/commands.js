define([
        'backbone',
        '!model/command'
    ],
    function (Marionette, ModelCommand) {
        'use strict';

        var Commands = Backbone.Collection.extend({
            model: ModelCommand
        });

        return Commands;
    });