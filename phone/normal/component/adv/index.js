(function anyName() {
  var moduleName="advbar";
  var url = "http://localhost:3000/extjs/phone/normal/component/adv/index.html";
  angular.module(moduleName, ['ui.router']).component(moduleName, {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"anyName",
    controller:function($scope,$rootScope,$state,$http,$location){
          console.log("显示广告栏！");
    }
  });
})();