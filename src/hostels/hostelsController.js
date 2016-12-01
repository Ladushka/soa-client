(function () {
    'use strict';

    angular.module('app')
        .controller('hostelsController',function ($scope,$http,studentsService) {

            studentsService.getHostels().then(function (response) {
                $scope.hostels=response.data;

            });

        });

})();
