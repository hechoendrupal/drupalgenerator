define([
  'marionette',
  'model/empty',
  'twig',
  'text!template/home.html.twig'
],
function(Marionette, EmptyModel, Twig, HomeTemplate){
    'use strict';
  /*
    The model should be passed when the view is instantiated in action.
    For instance copy inside the action:

    // New model
    //var Home  = new HomeView({
      // // Don't send model parameters for new items
      //model: new EmptyModel()
    //});

    //Edit / Fetch model to render in a specific region. You must change the ID
    var viewModel = new EmptyModel({nid:1})

    viewModel.fetch({
      success: function (Model) {
        var home = new HomeView({model: Model});
        region.show(home);
      }
    });

    
    
   */

  var HomeView = Marionette.ItemView.extend({
    initialize: function() {
      console.log("initialize a Home View");
    },
    // Organizing UI more info: http://marionettejs.com/docs/marionette.itemview.html#organizing-ui-elements
    /*ui: {
      paragraph: 'p',
      button: '.my-button'
    },*/
    // Register event in view using UI
    /*events: {
      'click @ui.button': 'clickedButton'
    },*/
    // Sample of event reaction function.
    /*clickedButton: function() {
      console.log('I clicked the button!');
    },*/
    template: function(data) {
      var template = Twig.twig({
          data: HomeTemplate
      });
      return template.render(data);
    }
  });

  return HomeView;

});
