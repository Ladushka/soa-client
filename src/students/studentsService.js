(function () {
    'use strict';

    angular.module('app')

        .service('studentsService', function ($http) {
            var url='http://192.168.39.52';
            return {
                getStudents: function () {
                    //return $http.get('src/json/students_host.json');
                    return $http.get(url+':50890/students');
                },
                getHostels:function () {
                    return $http.get('src/json/hostels.json');
                },
                getRooms:function (id) {
                    if(id=333333) {
                        return $http.get('src/json/roomE.json');
                    }else {
                        return $http.get('src/json/roomA.json');
                    }
                },
                deleteStudents: function (id) {
                    return $http.delete('src/json/students_host.json');
                },
                postStudent:function (student,id) {
                    return $http.post('src/json/hostels.json',student);
                }
            };
        });

})();
