var initController = function ( $scope) {
    $scope.items=[1,2,3,8,4,5,6];
};
var childController = function ($state, $scope) {
    $scope.param=$state.params.num1;
    $scope.num1=$state.params.num1;
    $scope.num2=$state.params.num2;
    console.log("传递参数 索引="+$state.params.num1+", 值="+$scope.items[$state.params.num2]);
};
var myApp = angular.module('app', ['ui.router', 'myfooter',"mytop"])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/index/list');
        $stateProvider
            .state('user', {
                url: '/index',
                templateUrl: 'main.html',
                abstract: true,
                controller: initController,
                controllerAs: 'anyName'
            })
            .state('user.list', {
                url: '/list',
                templateUrl: 'list.html',
            })
            .state('user.mod', {
                url: '/{num1}/{num2}',
                templateUrl: 'userInfor.html',
                controller: childController,
                controllerAs: 'anyName'
            });
    })
    .component('app', {
        template: '<div class="app"><div ui-view></div></div>',
        restrict: 'E'
    })
    .controller('headController', function ($scope) {
        $scope.title = "用户管理";
    });