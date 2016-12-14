(function () {
    'use strict';

    angular.module('app')

        .service('hostelsService',function ($http) {
            var url = 'http://localhost:50890';
            return {
                getHostels:function () {
                    //return $http.get('src/json/students_host.json');
                    return $http.get(url + '/api/hostels');
                },
                getRooms:function (id) {
                    return $http.get(url + '/api/hostels/' + id + '/rooms');
                    //return $http.get('src/json/students_host.json');
                },
                postHostel: function (hostel) {
                    return $http.post(url + '/api/hostels', hostel);
                }
            };
        });

})();
