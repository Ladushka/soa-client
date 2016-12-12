(function () {
    'use strict';
    angular.module('app')
        .service('roomsService', function ($http) {
            var url = 'http://localhost:50890';
            return {
                getRooms: function (id) {
                    //return $http.get(url + '/api/rooms');
                    return $http.get('src/json/rooms1.json');
                },
                getStudents: function (id) {
                    return $http.get('src/json/studentINroom.json');
                },
                postRoom: function (room) {
                    return $http.post(way + ':8080/api/rooms', room);
                }
            };

        });

})();
