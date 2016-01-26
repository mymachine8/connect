angular.module('app.enums', []).
   factory('Enum', [ function () {

      var service = {
        entities: {student:1, faculty:2, department:3, course:4}
      };

     return service;
    }]);