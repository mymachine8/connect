/**
 * Created by thespidy on 29/01/16.
 */
(function() {
    'use strict';
    angular
        .module('app.layout')
        .directive('sidebar', sidebar);

    function sidebar() {
        return {
            restrict: 'E', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
            scope: {user: '='}, //  This will add user to scope $scope.user if not specified assumes parent scope. and equal to $scope.userModel in controller
            templateUrl: "/app/layout/sidebar.html",
            replace: true,
            controller: 'SidebarController',
            controllerAs: 'vm'
        };
    }

})();