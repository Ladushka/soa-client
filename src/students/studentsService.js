(function () {
    'use strict';

    angular.module('app')

        .service('studentsService', function ($http) {
            var url = 'http://localhost:50890';
            return {
                getStudents: function () {
                    return $http.get('src/json/students_host.json');
                    //return $http.get(url+'/api/students');
                },
                getHostels:function () {
                    return $http.get('src/json/hostels.json');
                    //return $http.get(url + '/api/hostels');
                },
                getRooms:function (id) {
                    if(id=333333) {
                        return $http.get('src/json/roomE.json');
                    }else {
                        return $http.get('src/json/roomA.json');
                    }
                },
                deleteStudents: function (id) {
                    //return $http.delete(url + '/api/students/' + id);
                    return $http.delete('src/json/students_host.json');
                },
                postStudent:function (student,id) {
                    return $http.post('src/json/hostels.json',student);
                }
            };
        });

})();
