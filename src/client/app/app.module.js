(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'ui.router', 'LocalStorageModule', 'linkify', 'ngFileUpload',
            'app.authentication', 'app.error', 'app.admin'
        ])
        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://helloworld.com/'
        });
})();
