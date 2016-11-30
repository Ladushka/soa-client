(function () {
    'use strict';

    angular.module('app')

        .service('informationService', function ($http) {
            return {
                getStudents: function () {
                    return $http.get('src/json/students.json');
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
