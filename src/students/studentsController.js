(function () {
    'use strict';

    angular.module('app')

        .controller('studentsController', function ($scope, $http, studentsService) {


            studentsService.getStudents().then(function (response) {
                $scope.students = response.data;
                ($scope.students).forEach(function (item) {
                    if (item.room != null) {
                        item.rooms = [];
                        item.rooms.push(item.room);
                    }
                });

            });

            $scope.table_value = function (student) {
                $scope.selectStudent=student;
                document.getElementsByName(student.number);
                $scope.el = document.getElementsByName(student.number);

                studentsService.getRooms(student.number).then(function (response) {
                    $scope.studentRooms = response.data;

                    ($scope.studentRooms).forEach(function (item) {
                        if (item.hostel_id == student.hostel) {
                            (student.rooms).push(item.number);
                        }
                    });
                });

                ($scope.el).forEach(function (item) {
                    item.disabled = false;
                });
                $scope.el[0].addEventListener("change", $scope.changeOption);
            };

            $scope.changeOption = function () {
                $scope.selectedOption = (($scope.el[0]).options[($scope.el[0]).selectedIndex]).label;

              //  console.log($scope.selectedOption);
                console.log($scope.studentRooms.length);
                $scope.buf=(($scope.studentRooms).filter(function (item) {
                    if(item.hostel_id==$scope.selectedOption) {
                        console.log(item.number);
                        return item;
                    }
                })).map(function (item) {
                    return item.number;
                });

                console.log($scope.buf);
                $scope.selectStudent.rooms=$scope.buf;
                //console.log($scope.selectStudent);

            };
            studentsService.getHostels().then(function (response) {
                $scope.hostels = (response.data).map(function (item) {
                    return item.hostel_id;
                });
            });

            $scope.save = function (student) {
                ($scope.el).forEach(function (item) {
                    item.disabled = true;
                });
                //studentsService.postStudent(student,student.number);
            };

            $scope.delete=function (student) {
               // studentsService.deleteStudents(student.number);
            };
        });

})();
