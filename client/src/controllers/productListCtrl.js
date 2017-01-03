/**
 * Created by Mikhail on 1/2/2017.
 */
(function() {
    'use strict';

    angular.module("sportsStore")
        .controller("productListCtrl", function ($scope, $filter, productListActiveClass) {
            var selectedCategory = null;
            $scope.selectCategory = function (newCategory) {
                selectedCategory = newCategory;
            };
            $scope.categoryFilterFn = function (product) {
                return selectedCategory == null ||
                    product.category == selectedCategory;
            };
            $scope.getCategoryClass = function (category) {
                return selectedCategory == category ? productListActiveClass : "";
            }
        });

})();
