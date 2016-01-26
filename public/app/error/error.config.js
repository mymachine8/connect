(function() {
    'use strict';

    angular
        .module('app.error')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {
        $stateProvider
        .state('error.404', {
            url: '/404',
            abstract: true,
            templateUrl: 'app/error/404.html'
        })
        .state('error.505', {
            url: '/505',
            abstract: true,
            templateUrl: 'app/error/505.html'
        })
    }
})();