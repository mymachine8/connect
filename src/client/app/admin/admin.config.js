(function() {
    'use strict';

    angular
        .module('app.admin')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
        .state('admin', {
            abstract: true,
            templateUrl: 'app/admin/admin.html'
        })
        .state('admin.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/admin/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
        });
    }
})();