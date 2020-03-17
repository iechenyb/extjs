/**
 * Created by DHUser on 2017/12/28.
 */

function treeController($scope,$state){
    console.log("初始化系统树！");
    var data = [
        {
            title: '苹果公司',
            type: 'folder',
            products: [
                {
                    title: 'iPhone',
                    url:"http://localhost:3000/extjs/phone/vi-view/ex4/1.html",
                    type: 'item'
                },
                {
                    title: '最新成绩',
                    url:"http://localhost:3000/extjs/phone/vi-view/ex4/2.html",
                    type: 'item'
                },
                {
                    title: '历史成绩',
                    url:"http://localhost:3000/extjs/phone/vi-view/ex4/3.html",
                    type: 'item'
                },
                {
                    title: '完整页面引入',
                    url:"http://localhost:3000/extjs/phone/vi-view/ex1/index.html#PageTab",
                    type: 'item'
                }
            ]
        },
        {
            title: '微软公司',
            url:"http://localhost:3000/extjs/phone/vi-view/ex4/1.html",
            type: 'item'
        },
        {
            title: 'GitHub',
            type: 'item',
            url:"http://localhost:3000/extjs/phone/vi-view/ex4/2.html",
            attr: {
                icon: 'am-icon-github'
            }
        }
    ];
    $('#firstTree').tree({
        dataSource: function(options, callback) {
            // 模拟异步加载
            setTimeout(function() {
                callback({data: options.products || data});
            }, 400);
        },
        multiSelect: false,
        cacheItems: true,
        folderSelect: false
    });

    $('#firstTree').on('selected.tree.amui', function (event, data) {
        console.log(data.selected[0].title);
        $("#to").attr("href","http://www.w3school.com.cn/jquery");
        /*$("#to").click();*/
       // document.getElementById("to").click();
       // $state.go('index', {page: 'dlf'});//整个页面刷新
        $state.go('center1', {page: data.selected[0].url,name:data.selected[0].title});
        //$scope.msg=data.selected[0].title;
    });
}
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
                    templateUrl: "left.html",
                    controller:treeController
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
        })//跳转到指定页面
        .state("index", {
            url: "/index",
            views: {
                "top": {
                    template: "<h1>页面整个跳转更新!</h1>"
                },
                "bottom": {
                    templateUrl: "bottom.html"
                }
            }
        }).state("center1", {
        url: "/center",
        params:{page:'http://localhost:3000/extjs/phone/vi-view/ex4/right.html',name:'默认加载页面'},
        views: {
            "": {//空为默认视图
                template: "<h1>HELLO!</h1>"
            },
            "left": { //视图名chart
                templateUrl: "left.html",
                controller:treeController
            },
            "top": { //视图名data
                templateUrl: "top.html"
            },
            "right": { //视图名data
                templateUrl: function getTemplateUrl($params) {
                    //先执行
                    //http://localhost:8088/extjs/ama/manager/defult.html 跳转到缺省的页面 "http://localhost:3000/extjs/phone/vi-view/ex4/"+
                    var toPage =$params.page;
                    console.log("跳转到目的页面："+toPage);
                    return toPage;
                },
                controller:function($scope,$stateParams){
                    $scope.msg=$stateParams.page;
                    $scope.name=$stateParams.name;
                    console.log("子页面地址："+$stateParams.page);
                }
            },
            "bottom": { //视图名data
                templateUrl: "bottom.html"
            }
        }
    })
    $urlRouterProvider.otherwise("/home");
});