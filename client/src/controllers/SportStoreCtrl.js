/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module('sportsStore').controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
        $scope.data = {};
        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
    });

})();