/**
 * Created by thespidy on 08/02/16.
 */

(function() {
    'use strict';

    angular
        .module('app.classifieds')
        .controller('CreateListingController', CreateListingController);

    /* @ngInject */
    function CreateListingController($state) {
        var vm = this;

        vm.submitNewListing = submit;



        ///////////////////

        function submit(){
            console.log("hurray, my add got submitted");
        }
    }
})();
