/**
 * Created by Mikhail on 1/5/2017.
 */
(function() {
    'use strict';

    angular.module("sportsStoreAdmin")
        .controller("ordersCtrl", function($scope, $http, ordersUrl) {

            $http.get(ordersUrl, {withCredentials : true})
                .success(function (data) {
                    $scope.orders = data;
                })
                .error(function (error) {
                    $scope.error = error;
                });
            $scope.selectedOrder;
            $scope.selectOrder = function(order) {
                $scope.selectedOrder = order;
            };
            $scope.calcTotal = function(order) {
                var total = 0;
                for (var i = 0; i < order.products.length; i++) {
                    total +=
                        order.products[i].count * order.products[i].price;
                }
                return total;
            }
    });

})();