(function () {
    'use strict';

    angular.module('app')
        .controller('roomsController', function ($scope, $http, roomsService) {


            roomsService.getRooms(1).then(function (response) {
                $scope.rooms = response.data[0];

                $scope.findStudents();
            });

            $scope.findStudents = function () {
                ($scope.rooms.rooms).map(function (item) {
                    item.students = [];
                    roomsService.getStudents(item.room_id).then(function (response) {
                        item.students = response.data[0].students;
                        return item;
                    });

                });
            };

            // $scope.addRoom=function () {
            //
            // }
        });
})();
