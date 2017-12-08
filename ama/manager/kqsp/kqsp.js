var kqsp = function () {
    this.links = [
        {name: "xxxxx".title, uisref: 'kqsp'}
    ];
    this.sp = [
        {
            title: '学习视频1',
            list: [{
                title: "wvm视频播放测试",
                data: "2016-10-27 11:37",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/113644y0pca9uawdsw1r9r.jpg",
                description: "查看结算单，查看报告，查看日志文件，常见问题...",
                url: "wmv.wmv"

            },{
                title: "快期V2第五节:结算单、日志及常见问题",
                data: "2016-10-27 11:37",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/113644y0pca9uawdsw1r9r.jpg",
                description: "查看结算单，查看报告，查看日志文件，常见问题...",
                url: "http://player.youku.com/player.php/sid/XODgyODc2MjEy/v.swf"

            }, {
                title: "快期V2第四节:自动止损条件单风控（清晰）",
                data: "2016-10-27 11:34",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/113401yemm6e60m8oedef6.jpg",
                description: "预埋单/条件单，自动止盈止损，风险控制...",
                url: "http://player.youku.com/player.php/sid/XOTQwNjcyNzA0/v.swf"
            }, {
                title: "快期V2第三节:自动止损条件单风险管理",
                data: "2016-10-27 11:30",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/112936n1zl14p113o3bo4m.jpg",
                description: "预埋单/条件单，自动止盈止损，风险控制...",
                url: "http://player.youku.com/player.php/sid/XODgyODcwNDg0/v.swf"
            }, {
                title: "快期V2第二节：鼠标键盘快捷下单及撤改单",
                data: "2016-10-27 11:22",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/112230a7lm2tidziyld1am.jpg",
                description: "默认手数及自动开平，鼠标快速下单，键盘快速下单，报价表/报价块下单委托，撤单、修改未成交单，快速平仓及一键清仓...",
                url: "http://player.youku.com/player.php/sid/XODgyODY3ODYw/v.swf"
            }, {
                title: "快期V2第一节:登录及基本下单操作",
                data: "2016-10-27 11:16",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/111032dfbhngucfh0lhfoo.jpg",
                description: "账号登录，快速设置向导，界面调整及表格设置，资金查询，合约组及添加合约（含组合合约），下单方式...",
                url: "http://player.youku.com/player.php/sid/XODgyODY5Nzky/v.swf"
            }]
        },
        {
            title: '学习视频2',
            list: [{
                title: "快期V3:鼠标键盘快速下单及撤改单",
                data: "2016-10-27 14:03",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/140323jrw148851rr3rrps.jpg",
                description: "鼠标键盘快速下单及撤改单...",
                url: "http://player.youku.com/player.php/sid/XOTMyOTY4MTY4/v.swf"
            },{
                title: "快期V3:下单板介绍",
                data: "2016-10-27 14:01 ",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/140049mlcr9hrui99lr3ou.jpg",
                description: "下单板介绍...",
                url: "http://player.youku.com/player.php/sid/XOTMwOTIzMTMy/v.swf"
            },{
                title: "快期V3：自定义界面",
                data: "2016-10-27 13:58",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/135811lf0iydy4i46iig1z.jpg",
                description: "自定义界面...",
                url: "http://player.youku.com/player.php/sid/XOTMwOTIzNTM2/v.swf"
            },{
                title: "快期V3:行情图介绍",
                data: "2016-10-27 13:56",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/135620kqxlffxywfyblff7.jpg",
                description: "行情图介绍...",
                url: "http://player.youku.com/player.php/sid/XOTMwMjEzMDYw/v.swf"
            },{
                title: "快期V3:软件登录及退出",
                data: "2016-10-27 13:54",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/135351ll9lqwqhqvugp2qv.jpeg",
                description: "V3软件登录及退出...",
                url: "http://player.youku.com/player.php/sid/XOTMwMDU4MTc2/v.swf"
            },{
                title: "快期V3：软件介绍",
                data: "2016-10-27 13:51",
                img: "http://www.kuaiqi.net/data/attachment/portal/201610/27/134846sdcli6y3ttd13ycl.jpg",
                description: "首创多界面同时显示与自由切换，支持自定义界面；独家支持全行情数据（K线图、tick图、分时图等）；三键下单、阶梯下单等多种交易方式；支持断线重连；灵活便捷的止损功能 ...",
                url: "http://player.youku.com/player.php/sid/XOTI5NTk1NTQ4/v.swf"
            }]
        }
    ]
};
var sp = function ($state, $scope) {
    this.item = $scope.kqsp.sp[$state.params.idx1].list[$state.params.idx2];
};
var myApp = angular.module('app', ['ui.router', 'myfooter',"mymenu"])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/index/list');
        $stateProvider
            .state('kqsp', {
                url: '/index',
                templateUrl: 'kqsp.html',
                abstract: true,
                controller: kqsp,
                controllerAs: 'kqsp'
            })
            .state('kqsp.list', {
                url: '/list',
                templateUrl: 'list.html',
            })
            .state('kqsp.sp', {
                url: '/{idx1}/{idx2}',
                templateUrl: 'sp.html',
                controller: sp,
                controllerAs: 'sp'
            });
    })
    .component('app', {
        template: '<div class="app"><div ui-view></div></div>',
        restrict: 'E'
    })
    .controller('headController', function ($scope) {
        $scope.link = [{"title":"chenyb"}];
    });

myApp.directive('embedSrc', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var current = element;
            scope.$watch(function() { return attrs.embedSrc; }, function () {
                var clone = element
                    .clone()
                    .attr('src', attrs.embedSrc);
                current.replaceWith(clone);
                current = clone;
            });
        }
    };
});
/*首先我们先来聊聊你列出的directive中的几个属性：

restrict
E： 表示该directive仅能以element方式使用，即：<my-dialog></my-dialog>
A： 表示该directive仅能以attribute方式使用，即：<div my-dialog></div>
EA: 表示该directive既能以element方式使用，也能以attribute方式使用
transclude
你的directive可能接受页面上的其他html内容时才会用到，建议你先去掉该参数。有些高阶了。
scope
当你写上该属性时，就表示这个directive不会从它的controller里继承$scope对象，而是会重新创建一个。
templateUrl
你的directive里的html内容
link
可以简单理解为，当directive被angular 编译后，执行该方法
这里你说的没错，link中的第一个参数scope基本上就是你说的上面写的那个scope。

element简单说就是$('my-dialog')

attrs是个map，内容是你这个directive上的所有属性，例如：你在页面上如果这样写了directive:

    <my-dialog type="modal" animation="fade"></my-dialog>
    那attrs就是：
{
    type: 'modal',
        animation: 'fade'
}

 link 的概念可以与 compile 结合起来理解；二者都用于把directive渲染出来。

 compile在编译前执行，负责把template（包括transclude所引用的）变成一个完整的DOM结构。 link在编译后执行，负责根据controller和scope里的东东，给compile得到的DOM注册事件、关联数据，或者repeat之。

 粗暴理解的话，可以认为一个管DOM准备，一个管数据操作。
*/