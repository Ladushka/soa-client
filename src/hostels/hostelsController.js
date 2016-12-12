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

            //$scope.hostels.rooms=[];




        });

})();
