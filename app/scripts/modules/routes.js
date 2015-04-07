define(function () {
    return {
        init: function (Router) {
            Router.appRoute('', 'home');
            Router.appRoute(':generator', 'generate');
        }
    };
});
