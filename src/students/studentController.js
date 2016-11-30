(function () {
    'use strict';

    angular.module('app')

        .controller('studentsController', function ($scope, $http, studentsService) {

            studentsService.getStudents().then(function (response) {
                $scope.students=response.data;
                console.log(response.data);
            });
            $scope.test=function (student) {
                console.log(student);
            };
        });

})();
