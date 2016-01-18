(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('ManageStudentsController', ManageStudentsController);

    /* @ngInject */
    function ManageStudentsController($state) {
        var vm = this;
        vm.recentStudentsList = [];
        vm.showRecentStudents = false;
        vm.addStudent = addStudent;

        function addStudent() {
        	vm.showRecentStudents = true;
        	var studentInfo = {};
        	studentInfo.regnumber = vm.regnumber
        	studentInfo.firstname = vm.firstname;
        	studentInfo.lastname = vm.lastname;
        	studentInfo.name = vm.firstname + " " + vm.lastname;
        	studentInfo.email = vm.email;
        	studentInfo.gender = vm.gender;
        	vm.recentStudentsList.push(studentInfo);
        }
    }
})();
