(function anyName() {
  var moduleName="jhfooter";
  var url = "http://localhost:3000/extjs/phone/normal/component/footer/index.html";
  angular.module(moduleName, ['ui.router']).component(moduleName, {
    restrict: 'E',
    templateUrl: url,
    bindings:{links:'='},
    controllerAs:"anyName",
    controller:function($scope,$rootScope,$state,$http,$location){

    }
  });
})();