(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    function HeaderController($state) {
        var vm = this;
    }
})();
