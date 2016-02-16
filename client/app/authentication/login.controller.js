(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.loginClick = loginClick;
        // create blank user variable for login form
        vm.user = {
            email: '',
            password: ''
        };

        ////////////////

        function loginClick() {
            vm.dataLoading = true;
/*            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $state.go('student.portal');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });*/
            $state.go('student.bulletin');
        };
    }
})();
