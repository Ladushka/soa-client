(function () {
    'use strict';

    angular.module('app')

        .service('studentsService', function ($http) {
            return {
                getStudents: function () {
                    return $http.get('src/json/students_host.json');
                },
                getHostels:function () {
                    return $http.get('src/json/hostels.json');
                }
            };
        });

})();
