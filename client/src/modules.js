(function() {
    'use strict';
    angular.module("cart", []);
    angular.module('sportsStore', ['ngRoute', 'ngResource', 'customFilters', 'cart'])
        .constant("productListActiveClass", "btn-primary")
        .constant("dataUrl", "/products")
        .constant("productListPageCount", 3);

})();
