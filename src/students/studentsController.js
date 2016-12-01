(function () {
    'use strict';

    angular.module('app')

        .controller('studentsController', function ($scope, $http, studentsService) {

            studentsService.getStudents().then(function (response) {
                $scope.students=response.data;
                console.log(response.data);
            });

            $scope.table_value=function (student) {
                console.log(student.room)
                document.getElementsByName(student.number);
                $scope.el=document.getElementsByName(student.number);
                ($scope.el).forEach(function (item) {
                   item.disabled=false;
                });
            };

            studentsService.getHostels().then(function (response) {
                $scope.hostels=(response.data).map(function (item) {
                    return item.hostel_id;
                });
                console.log($scope.hostels);
            });
        });

})();
