(function myfooter() {
  var footer = {
    restrict: 'E',
    templateUrl: basePath+'component/footer/PageTab.html',
  };
  footerModule = angular.module('myfooter', ['ui.router'])
    .component('myfooter', footer);
})();