/**
 * Created by DHUser on 2017/2/14.
 */
angular.module("myApp",["ui.router","mytop","myheader","myfooter"])
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/main");
        $stateProvider.state("main",{
            url:"/main",
            templateUrl:"welcome.html",
            abstract:true,
            controller:function($scope,$state) {
            }
        }).state("menu",{
            url:"/menu/{id}",
            controller:function($scope,$state,$http) {
               $http.get("../../data/sp/shoes.json",{cache:true}).success(function(data){
                    $scope.list = data;
                });
                console.log("控制器开始渲染页面："+$state.params.id);
                $scope.param=$state.params.id;
            },
            templateUrl:function getTemplateUrl($params) {
                //先执行
                //http://localhost:8088/extjs/ama/manager/defult.html 跳转到缺省的页面
                var toPage = "http://localhost:8088/extjs/ama/manager/"+$params.id;
                console.log("跳转到目的页面："+toPage);
                return toPage;
            },
        });
        $urlRouterProvider.otherwise("/main");
    }
]).controller("myCtrl",function($scope){
    console.log("进入首页控制器");
    $scope.name="chenyb";
    $scope.rootName="系统菜单";
});
