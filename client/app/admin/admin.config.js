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
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController',
            controllerAs: 'vm'
        })
        .state('admin.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/admin/portal.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
        })
        .state('admin.dashboard.students', {
            url: '/managestudent',
            templateUrl: 'app/admin/manage-students.html',
            controller: 'ManageStudentsController',
            controllerAs: 'vm'
        })
        .state('admin.dashboard.faculty', {
            url: '/managestudent',
            templateUrl: 'app/admin/manage-faculty.html',
            controller: 'ManageFacultyController',
            controllerAs: 'vm'
        })
        .state('admin.dashboard.departments', {
            url: '/managestudent',
            templateUrl: 'app/admin/manage-departments.html',
            controller: 'ManageDepartmentsController',
            controllerAs: 'vm'
        });

    }
})();
