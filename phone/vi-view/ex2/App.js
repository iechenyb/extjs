/**
 * Created by DHUser on 2017/12/28.
 */
var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");
    $stateProvider.state("home", {
            url: "/home",
            views: {
                "": {//空为默认视图
                    template: "<h1>HELLO!</h1>"
                },
                "chart": { //视图名chart
                    templateUrl: "1.html"
                },
                "data": { //视图名data
                    templateUrl: "2.html"
                }
            }
        })
        .state("index", {
            url: "/index",
            views: {
                "": {
                    template: "<h1>HELLO!</h1>"
                },
                "data": {
                    templateUrl: "1.html"
                }
            }
        })
    $urlRouterProvider.otherwise("/home");
});