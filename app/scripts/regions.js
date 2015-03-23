define(function() {
    return {
        init: function(RegionManager) {

            RegionManager.addRegion('headerRegion', 'header');

            RegionManager.addRegion('mainRegion', 'main');

            RegionManager.addRegion('footerRegion', 'footer');

        }
    };
});
