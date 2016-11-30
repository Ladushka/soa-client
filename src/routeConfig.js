(function () {
    'use strict';

    angular.module('app')

        .config(function ($routeProvider) {
            $routeProvider.when('/check_in',
                {
                    templateUrl: 'src/students/students.html',
                    controller: 'studentsController'
                });
            $routeProvider.when('/hostels',
                {
                    templateUrl: 'src/hostels/hostels.html'//,
                    // controller: 'companiesController'
                });
        });

})();