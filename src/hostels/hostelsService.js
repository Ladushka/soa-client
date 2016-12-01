(function () {
    'use strict';

    angular.module('app')

        .service('hostelsService',function ($scope,$http) {
            return {
                getHostels:function () {
                    return $http.get('src/json/students_host.json');
                }
            };
        });

})();
