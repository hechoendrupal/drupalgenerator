define([
    '!view/layouts/header'
],function (HeaderLayout) {
    return {
        init: function (app) {
          // Get region to render
          var regionHeader = app._regionManager.get('header');
            if(!regionHeader.hasView()) {
                var header = new HeaderLayout({});
                regionHeader.show(header);
            }
        }
    };
});