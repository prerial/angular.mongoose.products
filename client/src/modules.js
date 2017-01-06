(function() {
    'use strict';
    angular.module("cart", []);
    angular.module('sportsStore', ['ngRoute', 'ngResource', 'customFilters', 'cart'])
        .constant("productListActiveClass", "btn-primary")
        .constant("dataUrl", "/products")
        .constant("orderUrl", "/orders")
        .constant("productListPageCount", 3)
        .config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "/views/productList.html"
            });
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

    angular.module("sportsStoreAdmin", ['ngRoute', 'ngResource'])
        .constant("authUrl", "/login")
        .constant("ordersUrl", "/orders")
        .constant("productUrl", "/products")
        .config(function ($routeProvider) {
//            $httpProvider.defaults.withCredentials = true;
            $routeProvider.when("/login", {
                templateUrl: "/views/adminLogin.html"
            });
            $routeProvider.when("/main", {
                templateUrl: "/views/adminMain.html"
            });
            $routeProvider.otherwise({
                redirectTo: "/login"
            });
        });
})();
