(function() {
    'use strict';

    angular
        .module('app.classifieds')
        .controller('ClassifiedsController', ClassifiedsController);

    /* @ngInject */
    function ClassifiedsController($state) {
        var vm = this;
    };
})();