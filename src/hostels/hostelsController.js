(function () {
    'use strict';

    angular.module('app')
        .controller('hostelsController',function ($scope,$http,studentsService,hostelsService) {

            studentsService.getHostels().then(function (response) {
                $scope.hostels=response.data;
                ($scope.hostels).forEach(function (item) {
                    hostelsService.getRooms(item.hostel_id).then(function (response) {
                        item.rooms=[];
                        item.rooms.push(response.data);
                    });
                });
            });

            $scope.addHostel=function () {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/hostels/addRoom.html',
                    size: 'sm',
                    scope: $scope
                });
                modalInstance.result.then(function (hostel) {
                    $scope.save(hostel);
                });
            };

            $scope.save=function(hostel){
                hostel.hostel_id=0;
                roomsService.postRoom(hostel);
            };




        });

})();
