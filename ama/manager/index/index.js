/**
 * Created by DHUser on 2017/2/14.
 */

angular.module("myApp",["ui.router","mytop","myheader","myfooter"])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/ht");
        $stateProvider.state("ht",{
            url:"/ht",
            templateUrl:"index.html",
            abstract:true,
            controller:function($scope,$state) {
            }
        }).state("menu",{
            url:"/menu/{id}",
            controller:function($scope,$state,$http) {
               $http.get("../../data/sp/shoes.json",{cache:true}).success(function(data){
                    $scope.list = data;
                });
                console.log("加载页面："+$state.params.id);
                $scope.param=$state.params.id;
            },
            templateUrl:function getTemplateUrl($params) {
                console.log($params.id);
                return $params.id;
            },
        });
        $urlRouterProvider.otherwise("/ht");
    }
]).controller("myCtrl",function($scope){
    console.log("进入首页控制器");
    $scope.name="chenyb";
});
