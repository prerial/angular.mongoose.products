/**
 * Created by Mikhail on 1/5/2017.
 */
(function() {
    'use strict';

    angular.module("sportsStoreAdmin")
        .controller("authCtrl", function($scope, $http, $location, authUrl) {

            $scope.authenticate = function (user, pass) {
                $http.post(authUrl, {
                    username: user,
                    password: pass
                }, {
                    withCredentials: true
                }).success(function (data) {
                    $location.path("/main");
                }).error(function (error) {
                    $scope.authenticationError = error;
                });
            }
    });

})();