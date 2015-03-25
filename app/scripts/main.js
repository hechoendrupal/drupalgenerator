require([
        'backbone',
        'app',
        'materialize',
        'twig',
        '!module/regionManager'
    ],
    function(Backbone, App) {
        'use strcit';

        $(function() {
            $('select').material_select();
            $(".button-collapse").sideNav();
        });

        App.start();
    });
