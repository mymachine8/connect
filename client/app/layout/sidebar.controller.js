(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);
    function SidebarController($state) {
        var vm = this;
        vm.callCategory = callCategory;


        //--------------------
        function callCategory(){
            $state.go(' bulletin.classifieds.create');
        }
    }
})();
