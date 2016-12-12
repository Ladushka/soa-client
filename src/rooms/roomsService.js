(function () {
    'use strict';
    angular.module('app')
        .service('roomsService', function ($http) {
            return {
                getRooms: function (id) {
                    return $http.get();
                }
            } ;

        });

})();
