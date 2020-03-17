/**
 * Created by DHUser on 2017/12/28.
 */
var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("","/PageTab");
    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "3.html",
            controller:function () {
                console.log("大开第二层嵌套页面3.html！");
            }
        });
    $urlRouterProvider.otherwise( "/PageTab");
});