(function () {
    'use strict';

    angular.module('app')

        .controller('informationController', function ($scope, $http, informationService) {
            // console.log('work');
            $scope.gridOptions = informationService.gridOptions().gridOptions;

            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };
            informationService.getStudents().then(function (response) {
                $scope.information=(response.data).map(function (item) {
                    return {name: item.surname+' '+(item.name).charAt(0)+'.'+ (item.patronymic).charAt(0)+'.',rating:item.rating};
                });
                $scope.gridOptions.data = $scope.information;
            });
        });

})();