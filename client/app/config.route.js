(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($urlRouterProvider, $locationProvider) {
        // Setup the apps routes
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '!';
        // set default routes when no path specified
        $urlRouterProvider.when('/', '/login');

        // always goto 404 if route not found
        $urlRouterProvider.otherwise('/404');
    }
})();