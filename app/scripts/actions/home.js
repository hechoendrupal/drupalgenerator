define(
  ['backbone.marionette',
  '!view/home'],
  function (Marionette ,HomeView) {
    'use strict';

    var Home = function (App) {
      // Get region to render
      var region = App._regionManager.getRegion('contentRegion');

      // statements go here
      console.log("initialize a Home Action");

      
        
        var home = new HomeView({model: null});
        region.show(home);
        
        
      

      

      

    };

    return Home;
  });
