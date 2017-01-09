/**
 * Created by Mikhail on 1/8/2017.
 */
(function() {
    'use strict';

    angular.module("exampleApp")
        .controller("defaultCtrl", function ($scope) {

            $scope.data = {};

            $scope.todos = [
                { action: "Get groceries", complete: false },
                { action: "Call plumber", complete: false },
                { action: "Buy running shoes", complete: true },
                { action: "Buy flowers", complete: false },
                { action: "Call family", complete: false }];
        });

})();