(function () {
    'use strict';

    angular.module('app')

        .service('informationService', function ($http) {
            var url='http://localhost:50890';
            return {
                getStudents: function () {
                    return $http.get(url+'/api/students/avg');
                },
                getAllStudents: function () {
                    return $http.get(url+'/api/students');
                },
                gridOptions: function () {
                    return {
                        gridOptions: {
                            enableFiltering: true,
                            enableGridMenu: true,
                            enablePaginationControls: false,
                            enableRowSelection: true,
                            selectionRowHeaderWidth: 35,
                            rowHeight: 35,
                            paginationPageSize: 5,
                            enableHorizontalScrollbar: 0,
                            enableVerticalScrollbar: 2,
                            columnDefs: [
                                {name: 'name'},
                                {name: "rating"}
                            ]
                        }
                    };
                }
            };
        });

})();
