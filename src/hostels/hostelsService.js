(function () {
    'use strict';

    angular.module('app')

        .service('hostelsService',function ($http) {
            return {
                getHostels:function () {
                    return $http.get('src/json/students_host.json');
                },
                getRooms:function (id) {
                    return $http.get('src/json/students_host.json');
                }
            };
        });

})();
