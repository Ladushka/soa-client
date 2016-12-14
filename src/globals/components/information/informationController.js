(function () {
    'use strict';

    angular.module('app')

        .controller('informationController', function ($scope, $http, informationService) {
            // console.log('work');
            $scope.gridOptions = informationService.gridOptions().gridOptions;

            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };

            informationService.getAllStudents().then(function (response) {
                $scope.information=(response.data).map(function (item) {
                    return {id:item.number,name: item.surname+' '+(item.name).charAt(0)+'.'+ (item.patronymic).charAt(0)+'.'};
                });
                $scope.informationLength=$scope.information.length;
                informationService.getStudents().then(function (response) {
                    //for(var i=0;i<)
                    $scope.informationAvg=(response.data).map(function (item) {
                        return {id:item.number,rating:item.rating};
                    });
                    var count=0;
                    for(var i=0;i<$scope.informationLength;i++){
                        for (var j=0;j<$scope.informationAvg.length;j++){
                            if($scope.information[i].id==$scope.informationAvg[j].id){
                                $scope.information[i].rating=$scope.informationAvg[j].rating;
                                count++;
                            }
                        }
                        if(count==0){
                            $scope.information[i].rating=0;
                        }
                    }
                    $scope.gridOptions.data = $scope.information;
                });
            });




        });

})();