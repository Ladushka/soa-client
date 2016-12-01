(function () {
    'use strict';

    angular.module('app')

        .controller('studentsController', function ($scope, $http, studentsService,hostelsService) {

            studentsService.getStudents().then(function (response) {
                $scope.students=response.data;
                console.log(response.data);
            });
            $scope.table_value=function (student) {
                document.getElementsByName(student.number);
                $scope.el=document.getElementsByName(student.number);
                ($scope.el).forEach(function (item) {
                   item.disabled=false;
                });
            };
            hostelsService.getHostels().then(function (response) {
                $scope.hostels=response.data;
                console.log($scope.hostels);
            });
        });

})();
