(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate', 'ui.router', 'ui.bootstrap', 'angularjs-dropdown-multiselect',
            'app.authentication', 'app.error', 'app.admin', 'app.student','app.layout','app.enums'
        ])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://helloworld.com/'
        });
})();
