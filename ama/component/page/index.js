(function mypage() {
  var pager = {
    restrict: 'E',
    templateUrl: basePath+'component/page/PageTab.html',
  };
  footerModule = angular.module('mypage', ['ui.router'])
    .component('mypage', pager);
})();