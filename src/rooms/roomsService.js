(function () {
    'use strict';
    angular.module('app')
        .service('roomsService', function ($http) {
            return {
                getRooms: function (id) {
                    return $http.get('src/json/rooms1.json');
                },
                getStudents: function (id) {
                    return $http.get('src/json/studentINroom.json');
                }
            };

        });

})();
