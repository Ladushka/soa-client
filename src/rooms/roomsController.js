(function () {
    'use strict';

    angular.module('app')
        .controller('roomsController', function ($scope, $http, $uibModal, $routeParams, roomsService) {


            roomsService.getRooms($routeParams.roomID).then(function (response) {
                $scope.rooms = response.data;
                console.log($scope.rooms);
                // $scope.findStudents();
                ($scope.rooms).map(function (item) {
                    item.students = [];

                    roomsService.getStudents(item.room_id).then(function (response) {
                        console.log(response.data);
                        item.students = response.data.students;
                        return item;
                    });

                });
            });


            $scope.addRoom = function () {
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

            $scope.save = function (room) {
                room.room_id = 0;
                room.hostel_id = $routeParams.roomID;
                console.log(room);
                roomsService.postRoom(room);
                location.reload();
            };
        });
})();
