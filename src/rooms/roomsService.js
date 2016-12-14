(function () {
    'use strict';
    angular.module('app')
        .service('roomsService', function ($http) {
            var url = 'http://localhost:50890';
            return {
                getRooms: function (id) {
                    return $http.get(url + '/api/hostels/'+id+'/rooms');
                   // return $http.get('src/json/rooms1.json');
                },
                getStudents: function (id) {
                    return $http.get(url+'/api/rooms/'+id);
                },
                postRoom: function (room) {
                    return $http.post(url + '/api/rooms', room);
                }
            };

        });

})();
