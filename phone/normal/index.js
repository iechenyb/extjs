var page;
//重新画分页栏
function restPageList($scope,$http){
    $scope.pages = Math.ceil(  $scope.total / $scope.pageSize); //得到总页数;
    page  = $("#page").page({
        pages:$scope.pages, //页数
        curr:  $scope.cur , //当前页
        type: 'default', //主题
        groups: 5, //连续显示分页数
        prev: '<', //若不显示，设置false即可
        next: '>', //若不显示，设置false即可
        first: "首页",
        last: "尾页", //false则不显示
        render: function(context, $el, index) { //渲染[context：对this的引用，$el：当前元素，index：当前索引]
            //逻辑处理
            if (index == 'last') { //虽然上面设置了last的文字为尾页，但是经过render处理，结果变为最后一页
                $el.find('a').html('最后一页');
                return $el; //如果有返回值则使用返回值渲染
            }
            return false; //没有返回值则按默认处理
        },
        jump: function(context, first) {
            if (first)return;
            $scope.cur = context.option.curr;
            $scope.start =  $scope.cur *10-10;
            var limit = $scope.pageSzie;
            //http://localhost/comweb/common/roles.do?start=20&limit=10
            $http.get('http://localhost:3000/comweb/common/roles.do?start='+ $scope.start+'&limit=10')
                .success(function (data) {
                    $scope.items = data.data;
                    $scope.total = data.data.total;
                });
            console.log('当前第：' + context.option.curr + "页");
        }
    });
}

var initController = function ( $scope,$http) {
    $scope.start=0;
    $scope.cur = 1;
    $scope.pageSize=10;
    $http.get('http://localhost:3000/comweb/common/roles.do?start='+0+'&limit=10')
        .success(function (data) {
            $scope.items = data.data;
            $scope.total = data.total;
            restPageList($scope,$http);
        });
    $scope.delRole=function (id) {
            alert("正在删除"+id+",start="+$scope.start+",cur="+$scope.cur);
            $http.get('http://localhost:3000/comweb/common/delRole.do?ids='+id).success(function(data){
                $http.get('http://localhost:3000/comweb/common/roles.do?start='+ $scope.start+'&limit=10')
                    .success(function (data) {
                        $scope.items = data.data;
                        //当删除数据等于0时，当前页数据没有啦
                        if($scope.items.length==0){
                            if($scope.cur>1) {
                                $scope.cur = $scope.cur - 1;
                                page.setCurr($scope.cur,function(){});
                            }else{
                                $scope.cur = 0;
                            }
                        }
                        $scope.total = data.total;
                        restPageList($scope,$http);
                    });
            });
    };
    $scope.addRole=function () {
        $http.get('http://localhost:3000/comweb/common/addRole.do?name=1&desc=haha').success(function(data){
            $http.get('http://localhost:3000/comweb/common/roles.do?start='+ $scope.start+'&limit=10')
                .success(function (data) {
                    $scope.items = data.data;
                    $scope.total = data.total;
                    console.log("cur="+$scope.cur+",curPageSize="+data.data.length);
                   /* if($scope.items.length>10){
                        page.setCurr($scope.cur,function(){});
                    }*/
                    restPageList($scope,$http);
                });
        });
    };
};
var modController = function ($state, $scope) {
    console.log("传递参数："+$state.params.id);
    $scope.id=$state.params.id;
};
var delController = function ($state, $scope,$http) {
    console.log("传递参数："+$state.params.id);
    $scope.id=$state.params.id;
};
/*angular.element(document).ready(function() {});*/

var myApp = angular.module('myApp', ['ui.router',"jhheader","jhfooter","advbar","treesys"])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/index/list');
        $stateProvider
            .state('role', {
                url: '/index',
                templateUrl: 'main.html',
                abstract: true,
                controller: initController,
                controllerAs: 'anyName'
            })
            .state('role.list', {
                url: '/list',
                templateUrl: 'list.html',
            })
            .state('role.mod', {
                url: '/{id}',
                templateUrl: 'mod.html',
                controller: modController,
                controllerAs: 'anyName'
            })/*.state('role.del', {
            url: '/{id}',
            templateUrl: 'list.html',
            controller: delController,
            controllerAs: 'anyName'
        })*/;
    })
    .component('board', {
        template: '<div class="app"><div ui-view></div></div>',
        restrict: 'E'
    })
    .controller('pageController', function ($scope) {
        $scope.title = "角色管理";
        $scope.bashPath='http://localhost:3000';
    });
/*
angular.bootstrap(document,["myApp"]);*/
