(function () {
    'use strict';

    angular.module('app')

        .controller('informationController', function ($scope, $http, informationService) {
            console.log('work');
            $scope.gridOptions = informationService.gridOptions().gridOptions;

            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };
            informationService.getStudents().then(function (response) {
                $scope.gridOptions.data = response.data;
                console.log(response.data);
            });
        });

})();