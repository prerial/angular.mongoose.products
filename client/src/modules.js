(function() {
    'use strict';
    angular.module("cart", []);
    angular.module('sportsStore', ['ngRoute', 'ngResource', 'customFilters', 'cart'])
        .constant("productListActiveClass", "btn-primary")
        .constant("dataUrl", "/products")
        .constant("productListPageCount", 3)
        .config(function ($routeProvider) {
            $routeProvider.when("/complete", {
                templateUrl: "/views/thankYou.html"
            });
            $routeProvider.when("/placeorder", {
                templateUrl: "/views/placeOrder.html"
            });
            $routeProvider.when("/checkout", {
                templateUrl: "/views/checkoutSummary.html"
            });
            $routeProvider.when("/products", {
                templateUrl: "/views/productList.html"
            });
            $routeProvider.otherwise({
                templateUrl: "/views/productList.html"
            });
    });
})();
