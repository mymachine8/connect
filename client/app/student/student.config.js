(function() {
    'use strict';

    angular
        .module('app.student')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {
        $stateProvider
        .state('student', {
            abstract: true,
            templateUrl: 'app/student/student.html',
            controller: 'StudentController',
            controllerAs: 'vm'
        })
        .state('student.portal', {
            url: '/portal',
            templateUrl: 'app/student/portal.html',
            controller: 'PortalController',
            controllerAs: 'vm'
        })
    }
})();
