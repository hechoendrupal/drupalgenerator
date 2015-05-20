define([
    '!view/layouts/header'
],function (HeaderLayout) {
    return {
        init: function (app) {
          // Get region to render
          var regionHeader = app._regionManager.get('header');
            if(typeof(regionHeader.currentView) == 'undefined') {
                var header = new HeaderLayout({});
                regionHeader.show(header);
            }
        }
    };
});