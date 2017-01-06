/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module('sportsStore').controller("sportsStoreCtrl",
        function ($scope, $http, $location, dataUrl, orderUrl, cart){

            $scope.data = {};

            $http.get(dataUrl)
                .success(function (data) {
                    $scope.data.products = data.filter(function(item){
                        if(item.category){
                            return item;
                        }
                    })
                })
                .error(function (error) {
                    $scope.data.error = error;
                });

            $scope.sendOrder = function (shippingDetails) {
                var order = angular.copy(shippingDetails);
                order.products = cart.getProducts();
                $http.post(orderUrl, order)
                    .success(function (data) {
                        $scope.data.orderId = data.id || data._id ;
                        cart.getProducts().length = 0;
                    })
                    .error(function (error) {
                        $scope.data.orderError = error;
                    }).finally(function () {
                    $location.path("/complete");
                });
            }
    });

})();