define(
  ['marionette', 
          '!action/home',
  ],
function (Marionette,Home)
  {
    'use strict';
    var Controller = Marionette.Controller.extend({
      initialize : function(options) {
        // store a regions that will be used to show the stuff rendered by this components
        this.App = options.App;
       },
      
       home: function() {
        return Home(this.App);
        },
      
    });

    return Controller;
  });
