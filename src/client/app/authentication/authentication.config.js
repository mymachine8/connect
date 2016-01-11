(function() {
    'use strict';

    angular
        .module('app.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
        .state('authentication', {
            abstract: true,
            templateUrl: 'app/authentication/authentication.html'
        })
        .state('authentication.login', {
            url: '/login',
            templateUrl: 'app/authentication/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('authentication.forgot', {
            url: '/forgot',
            templateUrl: 'app/examples/authentication/forgot.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        });
    }
})();