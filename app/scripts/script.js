App.addInitializer(function(options) {

    // You might want to break your app into multiple routers.
    // Store those here.
    this.routers = {};

    // Create our example Module Router
    var router = new AppRouter();

    // Let's listet to all routers, passing along the 'route' event.
    // See the `SideBarView` below for example of use.
    this.listenTo(router, 'route', function() {
        var args = ['route'].concat(Array.prototype.slice.call(arguments));
        this.vent.trigger.apply(this.vent, args);
    });

    // Testing the router events here...
    router.bind('all', function() {
        // console.log('route.all', arguments);
    });

    // Store the router and kick off the history
    this.routers.appRouter = router;
    Backbone.history.start();

});

// Define our models/collections
// -----------------------------

var PersonModel = Backbone.Model.extend({});

var PeopleCollection = Backbone.Collection.extend({
    model: PersonModel
});

// Define globally accessible views
// --------------------------------

var ContentView = Marionette.ItemView.extend({
    template: '#content-template'
});

// Create the Main module to kick off the app
// ------------------------------------------

App.module("MainModule", function(Mod, App, Backbone, Marionette, $, _){

    var SidebarView = Marionette.ItemView.extend({
        template: '#sidebar-template',
        initialize: function() {
            App.vent.on('route', function(name, args) {
                this.$el.find('li').removeClass('active');
                this.$el.find('a[href="#/'
                + Backbone.history.fragment
                + '"]').parent().addClass('active');
            }, this);
        }
    });

    // Define a controller to run this module
    // --------------------------------------

    var Controller = Marionette.Controller.extend({

        initialize: function(options){
            this.mainRegion = options.mainRegion;
            this.sidebarRegion = options.sidebarRegion;
        },

        show: function(){
            var model = new Backbone.Model({
                content: 'You are Home. Click a link on the sidebar to do something&hellip;'
            });

            var view = new ContentView({
                model: model
            });

            // Let's create our sidebar with some links, demonstrating the
            // router createUrl method at work.
            var sidebarModel = new Backbone.Model({
                list: [
                    App.request('url', 'index'),
                    App.request('url', 'search', {'query': 'monkeys'}),
                    App.request('url', 'search', {'query': 'kittens'}),
                    App.request('url', 'people/list', {companyId: 103}),
                    App.request('url', 'people/list', {companyId: 105}),
                    App.request('url', 'people/view', {id: 3256})
                ]
            });

            var sidebarView = new SidebarView({
                model: sidebarModel
            });

            this.mainRegion.show(view);
            this.sidebarRegion.show(sidebarView);
        }

    });

    Mod.actionIndex = function() {
        Mod.controller.show();
    };

    // Initialize this module when the app starts
    // ------------------------------------------

    Mod.addInitializer(function(){
        Mod.controller = new Controller({
            mainRegion: App.mainRegion,
            sidebarRegion: App.sidebarRegion
        });
    });
});

// Create a search module
// ----------------------

App.module('SearchModule', function(Mod, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    Mod.actionSearch = function(query) {

        // Normally there would be some ajax request here to load data
        // based on the search query...
        var model = new Backbone.Model({
            content: 'You searched for <code>' + query + '</code>'
        });

        var view = new ContentView({
            model: model
        });

        App.mainRegion.show(view);
    };

});

// Create a person module
// ----------------------

App.module('PersonModule', function(Mod, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    var PeopleItemView = Marionette.ItemView.extend({
        template: '#people-list-item-template',
        onRender: function () {
            // get rid of that pesky wrapping-div
            // assumes 1 child element.
            this.$el = this.$el.children();
            this.setElement(this.$el);
        }
    });

    var PeopleListView = Marionette.CompositeView.extend({
        template: '#people-list-template',
        itemViewContainer: 'ul',
        itemView: PeopleItemView
    });

    Mod.actionList = function(companyId) {

        var collection = new PeopleCollection(this.people.where({
            company_id: parseInt(companyId)
        }));

        var view = new PeopleListView({
            model: new Backbone.Model({
                companyId: companyId
            }),
            collection: collection
        });

        App.mainRegion.show(view);
    };

    Mod.actionView = function(id) {

        var person = this.people.get(id);

        var message = 'Could not find person id ' + id;

        if(person) {
            message = '<p>You\'re viewing ' + person.get('name')
            + ', id <code>' + id + '</code> of company <code>'
            + person.get('company_id') + '</code>.</p>'
            + '<pre>' + JSON.stringify(person.attributes, null, " ") + '</pre>'
        }
        var model = new Backbone.Model({
            content: message
        });

        var view = new ContentView({
            model: model
        });

        App.mainRegion.show(view);
    };

    Mod.addInitializer(function(){
        // Create our people collection from bootstrapped data
        this.people = new PeopleCollection(window.people);
    });

});

// Start the app
// -------------

App.start();

// Wait a brief moment so it triggers the css transactions
// If we don't delay, at least in my minimal testing, Chrome
// does not animate the content but instead snaps-to-position.
_.delay(function() {
    App.routers.appRouter.navigate(App.request('url', 'index'), {trigger: true});
}, 1);`
