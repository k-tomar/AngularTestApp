'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', ['ui.router'])
.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
        $stateProvider            
            .state('home', {
                url: '/home',
                templateUrl: 'tpl/form.html'
            })
    }
  ]
);

app.controller('AppCtrl',['$scope', '$http', function($scope, $http){
    $scope.tracks = {};
    $scope.trackCount = 0;
    $scope.findArtist = function (search) {
        $http({
            url: './search.php', 
            method: "GET",
            params: search
        })
        .success(function(data, status, headers, config) {
            $scope.tracks = data.results;
            $scope.trackCount = data.resultCount;
        })
        .error(function(data, status, headers, config) {
            
        });
    };
}]);