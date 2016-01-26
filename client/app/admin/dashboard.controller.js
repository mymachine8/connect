(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('DashboardController', DashboardController);

    /* @ngInject */
    function DashboardController($state, Enum) {
        var vm = this;
        vm.currentTab = -1;
        vm.collegeEntities = [
        {id:1, name: 'Students'},
         {id:2, name: 'Faculty'}, 
         {id:3, name: 'Departments'}, 
         {id:4, name: 'Courses'},
         {id:5, name: 'Alumni'}];
        vm.manageCollegeEntity = manageCollegeEntity;

        
        function manageCollegeEntity(index, id){
            vm.currentTab = index; 
            switch(id) {
                case Enum.entities.student:
                        $state.go('admin.dashboard.students');
                        break;
                case Enum.entities.faculty:
                        $state.go('admin.dashboard.faculty');
                        break;
                case Enum.entities.department:
                        $state.go('admin.dashboard.departments');
                        break;
                case Enum.entities.alumni:
                        $state.go('admin.dashboard.alumni');
                        break;
            }
    	}
    }
})();
