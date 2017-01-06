/**
 * Created by Mikhail on 1/5/2017.
 */
(function() {
    'use strict';

    angular.module("sportsStoreAdmin")
        .controller("mainCtrl", function($scope) {

            $scope.screens = ["Products", "Orders"];
            $scope.current = $scope.screens[0];
            $scope.setScreen = function (index) {
                $scope.current = $scope.screens[index];
            };
            $scope.getScreen = function () {
                return $scope.current == "Products"? "/views/adminProducts.html" : "/views/adminOrders.html";
            };

    });

})();