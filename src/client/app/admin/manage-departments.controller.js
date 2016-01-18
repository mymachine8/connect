(function() {
    'use strict';

    angular
        .module('app.admin')
        .controller('ManageDepartmentsController', ManageDepartmentsController);

    /* @ngInject */
    function ManageDepartmentsController($state) {
        var vm = this;
        vm.selectedDepartmentsList = []; 
        vm.departmentsDropdownList = [ {id: 1, label: "Computer Science & Engineering"}, {id: 2, label: "Electronics & Communication Engineering"}, {id: 3, label: "Mechanical Engineering"}];
    	vm.dropDownSettings = {showCheckAll:false,showUncheckAll:false,enableSearch:true, closeOnBlur: true};
    	vm.dropDownEvents = {onItemSelect:onDropDownItemSelected, onItemDeselect: onDropDownItemDeselected};

    	function onDropDownItemSelected(item){
    		alert(item);
    	}
    	function onDropDownItemDeselected(item) {
    		alert(item);
    	}
    }
})();
