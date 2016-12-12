(function () {
    'use strict';
    angular.module('app')
        .service('roomsService', function ($http) {
            var way='';
            return {
                getRooms: function (id) {
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
