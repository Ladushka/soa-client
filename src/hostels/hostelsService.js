(function () {
    'use strict';

    angular.module('app')

        .service('hostelsService',function ($http) {
            return {
                getHostels:function () {
                    return $http.get('src/json/students_host.json');
                    //return $http.get(url + '/api/hostels');
                },
                getRooms:function (id) {
                    //return $http.get(url + '/api/hostels/' + id + '/rooms');
                    return $http.get('src/json/students_host.json');
                },
                postHostel: function (hostel) {
                    return $http.post(way + ':8080/api/rooms', hostel);
                }
            };
        });

})();
