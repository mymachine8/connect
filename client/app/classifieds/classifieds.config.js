(function() {
    'use strict';

    angular
        .module('app.classifieds')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('bulletin.classifieds', {
                abstract: true,
                templateUrl: 'app/classifieds/classifieds.html',
                controller: 'ClassifiedsController',
                controllerAs: 'vm'
            })
            .state('bulletin.classifieds.create', {
                url: '/classifieds/create',
                templateUrl: 'app/classifieds/create-listing.html',
                controller: 'CreateListingController',
                controllerAs: 'vm'
            });

    }
})();   /**
 * Created by thespidy on 08/02/16.
 */
