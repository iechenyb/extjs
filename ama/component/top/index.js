(function mytop() {
  var topController=function($scope,$rootScope,$state,$http,$location){

  };
  var url = basePath+'component/top/PageTab.html';
  var top = {
    restrict: 'E',
    templateUrl: url,
    bindings:{title:'='},
    controllerAs:"top",
    controller:topController
  };
  headerModule = angular.module('mytop', ['ui.router'])
    .component('mytop', top);
})();