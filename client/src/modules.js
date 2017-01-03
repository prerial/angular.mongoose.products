(function() {
    'use strict';

    angular.module('sportsStore', ['ngRoute', 'ngResource', 'customFilters'])
        .constant("productListActiveClass", "btn-primary")
        .constant("dataUrl", "/products")
        .constant("productListPageCount", 3);

})();
