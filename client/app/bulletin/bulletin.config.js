(function() {
    'use strict';

    angular
        .module('app.classifieds')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('bulletin', {
                url: '/bulletin',
                templateUrl: '/app/bulletin/bulletin.html'
            });
    }
})();
