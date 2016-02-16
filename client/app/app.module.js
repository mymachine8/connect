(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate', 'ui.router', 'ui.bootstrap', 'angularjs-dropdown-multiselect',
            'app.authentication', 'blocks.exception', 'app.admin', 'app.student','app.layout','app.enums', 'app.classifieds',
            'app.bulletin'
        ])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://helloworld.com/'
        });
})();
