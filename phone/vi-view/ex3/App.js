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
                "left": { //视图名chart
                    templateUrl: "left.html"
                },
                "top": { //视图名data
                    templateUrl: "top.html"
                },
                "right": { //视图名data
                    templateUrl: "right.html"
                },
                "bottom": { //视图名data
                    templateUrl: "bottom.html"
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
                    templateUrl: "left.html"
                }
            }
        })
    $urlRouterProvider.otherwise("/home");
});