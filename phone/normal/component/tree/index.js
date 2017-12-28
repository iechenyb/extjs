(function anyName() {
  var moduleName="treesys";
  var url = "http://localhost:3000/extjs/phone/normal/component/tree/index.html";
  angular.module(moduleName, ['ui.router']).component(moduleName, {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"anyName",
    controller:function($scope,$rootScope,$state,$http,$location){
          console.log("初始化系统树！");
      var data = [
        {
          title: '苹果公司',
          type: 'folder',
          products: [
            {
              title: 'iPhone',
              type: 'item'
            },
            {
              title: 'iMac',
              type: 'item'
            },
            {
              title: 'MacBook Pro',
              type: 'item'
            }
          ]
        },
        {
          title: '微软公司',
          type: 'item'
        },
        {
          title: 'GitHub',
          type: 'item',
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
        document.getElementById("to").click();
      });
    }
  });
})();