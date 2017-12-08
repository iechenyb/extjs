/**
 * Created by DHUser on 2017/2/16.
 */
pageSize = 10;
var onlyOnePage;
var NoRecords;
function renderSpilter(list,$scope){
    onlyOnePage=false;
    NoRecords = false;
    if(list==undefined||list=='undefined'){
        list=[];//watch时会执行
    }
    $scope.total =  list.length;
    $scope.pages = Math.ceil(list.length / pageSize); //得到总页数
    if($scope.pages<=1){
        if($scope.pages==1){
            onlyOnePage = true;
        }
        if($scope.pages==0){
            NoRecords = true;
        }
        $scope.pages=2;
    }
    $page=$("#page").page({
     pages:$scope.pages, //页数
     curr: $scope.cur, //当前页
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
            if(onlyOnePage||NoRecords){
                $el.find('a').css('display','none');//只有一页则不展示最后一个页标签
            }
            return $el; //如果有返回值则使用返回值渲染
        }
        if(onlyOnePage&&(index==2||index=='next')){
            $el.find('a').css('display','none');
            $scope.pages=1;
        }
        if(NoRecords&&(index==1||index==2||index=='next'||index=='last')){
            $el.find('a').css('display','none');
            $scope.pages=0;
            $scope.cur=0;
        }
        console.log(index);
        return false; //没有返回值则按默认处理
    },
     jump: function(context, first) {
         if (first)return;
             console.log('当前第：' + context.option.curr + "页,pages="+$scope.pages);
             $scope.$apply(function () {
             $scope.cur = context.option.curr;
             $scope.start = ($scope.cur-1)*pageSize+1;
             $scope.end = $scope.cur*pageSize;
         });
     }
     });
}