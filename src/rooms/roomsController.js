(function () {
    'use strict';

    angular.module('app')
        .controller('roomsController', function ($scope, $http, $uibModal,$routeParams,roomsService) {


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

            $scope.addRoom=function () {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/hostels/addRoom.html',
                    size: 'sm',
                    scope: $scope
                });
                modalInstance.result.then(function (room) {
                    $scope.save(room);
                });
            };

            $scope.save=function(room){
                room.room_id=0;
                room.hostel_is=$routeParams.roomID;
                roomsService.postRoom(room);
            };
        });
})();
