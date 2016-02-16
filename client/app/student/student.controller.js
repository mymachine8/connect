(function() {
    'use strict';

    angular
        .module('app.student')
        .controller('StudentController', StudentController);

    /* @ngInject */
    function StudentController($state) {
        var vm = this;
    }

})();
