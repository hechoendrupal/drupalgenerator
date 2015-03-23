require([
    'app',
    'jquery',
    'materialize'
], function(App, $) {
    'use strcit';
    $(function() {
        $('select').material_select();
        $(".button-collapse").sideNav();
    });
    App.start();
});
