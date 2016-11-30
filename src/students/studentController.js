(function () {
    'use strict';

    angular.module('app')

        .controller('studentsController', function ($scope, $http, studentsService) {

            studentsService.getStudents().then(function (response) {
                $scope.students=response.data;
                console.log(response.data);
            });
            $scope.test=function (student) {
                document.getElementsByName(student.number);
                $scope.el=document.getElementsByName(student.number);
                ($scope.el).forEach(function (item) {
                   item.disabled=false;
                });

            };
        });

})();
