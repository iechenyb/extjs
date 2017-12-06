/**
 * Created by DHUser on 2017/12/5.
 */

function drawTree(){
// 初始化节点提示qtip
Ext.QuickTips.init();
// 定义一个根节点
var root = new Ext.tree.TreeNode({
    id : 'root',
    text : '树根',
    checked : true,
    qtip : '我是树根'
});
// 定义一个树叶或者枝
var leaf1 = new Ext.tree.TreeNode({
    id : "leaf1",
    text : '我是树叶1',
    checked : true,
    qtip : '我是树叶'
});
var leaf2 = new Ext.tree.TreeNode({
    id : "leaf2",
    text : '我是树枝2',
    checked : true,
    qtip : '我是树枝'
});
var leaf3 = new Ext.tree.TreeNode({
    id : "leaf3",
    text : '我是树叶3',
    //href : 'http://www.baidu.com',
    checked : true,
    qtip : '我是树叶'
});
var leaf4 = new Ext.tree.TreeNode({
    id : "leaf4",
    text : '我是树枝4',
    checked : true,
    qtip : '我是树枝'
});
var leaf5 = new Ext.tree.TreeNode({
    id : "leaf5",
    text : '我是树叶5',
    checked : true,
    qtip : '我是树叶'
});
var leaf6 = new Ext.tree.TreeNode({
    id : "leaf6",
    text : '我是树叶4',
    checked : true,
    qtip : '我是树叶'
});
root.appendChild(leaf1);
root.appendChild(leaf2);
leaf2.appendChild(leaf3);
leaf2.appendChild(leaf4);
leaf4.appendChild(leaf5);
leaf4.appendChild(leaf6);


/*  // 定义一个菜单
 // var contextMenu = new Ext.menu.Menu({ items : [(
 // ),( )] }); contextMenu.showAt(event.getXY());
 // tree.on('contextmenu',treeContextHandler);
 //
 //
 // var root = new Ext.tree.AsyncTreeNode({ text:'i am a root', id:'root',
 // children:[{ text:'node1',leaf:true },{ text:'node2',leaf:true },{
 // text:'node3',leaf:true }] }); var loader = new Ext.tree.TreeLoader();*/


// 定义一棵树
var tree = new Ext.tree.TreePanel({
    renderTo : 'tree',
    // loader : loader,
    root : root,
    title : '我是一颗小小树',// 树标题
    collapsible : true,// 树形是否有缩放功能
    autoHeight : true,// 自动高度，默认false
    animate : true,// 展开动画
    enableDrag : true,// 是否可以拖动(效果上)
    enableDD : true,// 不进可以拖动，还可以改变节点层次结构
    enableDrop : false,// 仅仅drop
    lines : true,// 节点间的虚线条是否显示
    rootVisible : true,// 是否显示根节点，默认true
    userArrows : true,// 是否显示小箭头
    // autoScroll : true,//是否显示滚动条
    // height : 150,
    width : 300
});
// 第一个参数为true，展开所有节点，false只展开一级。第二个参数为true，慢慢展开，显示展开，false，则不显示过程
root.expand(false, true);
// 编写树节点的单击事件
tree.on('click', function(node, event) {
    // Ext.Msg.alert("信息提示","you clicked me！");
    /*Ext.Msg.show({
        title : '信息提示',
        msg : node.text,
        animEl : node.ui.textNode
    });*/
    addTab(node.text);
    // 为节点修改样式
   /* var ui = node.ui;
    ui.hide();
    (function() {
        ui.show();
    }).defer(2000);*/
    // ui.addClass("big");
    // (
    // function(){
    // ui.removeClass("big");
    // }
    // ).defer(5000);
    // 删除选中的节点
    // tree.getSelectionModel().getSelectedNode().remove();
});
// 编写树节点的双击事件
tree.on('dblclick', function(node, event) {
    Ext.Msg.alert("信息提示", "you clicked me twice！");
});
// 编辑树节点的拖放事件
tree.on('nodedrop', function(event) {
    Ext.Msg.alert('信息提示', '节点' + event.dropNode.text + '掉到了'
        + event.target.text + '上，掉落的方式是' + event.point);
    switch (event.point) {
        case 'append':
            Ext.Msg.alert('信息提示', '节点' + event.dropNode.text + '变成了'
                + event.target.text + '子节点');
            break;
        case 'above':
            Ext.Msg.alert('信息提示', '节点' + event.dropNode.text + '掉到了'
                + event.target.text + '和'
                + event.target.previousSibling.text + '之间');
            break;
        case 'below':
            Ext.Msg.alert('信息提示', '节点' + event.dropNode.text + '掉到了'
                + event.dropNode.previousSibling.text + '和'
                + event.target.nextSibling.text + '之间');
            break;
    }
})


// 对树节点进行排序的工具
// new Ext.tree.TreeSorter(tree,{folderSort:true,dir:desc,property:'text'});


// //编写树节点的双击事件 tree.on('expandnode',function(node,event){
// Ext.Msg.alert("信息提示","expandnode！"); }); //编写树节点的双击事件
// tree.on('collapsenode',function(node,event){
// Ext.Msg.alert("信息提示","collapsenode！"); });


var root2 = new Ext.tree.TreeNode({
    id : 'root2',
    text : '树根2',
    qtip : '我是树根2'
});
var tree2 = new Ext.tree.TreePanel({
    renderTo : 'tree',
    root : root2,
    enableDrop : true,
    // enableDrag:true,
    title : '我是一颗小小草',
    collapsible : true,
    width : 300
});
root2.expand();
var root3 = new Ext.tree.TreeNode({
    id : 'root3',
    text : '树根2',
    qtip : '我是树根3'
});
var tree3 = new Ext.tree.TreePanel({
    renderTo : 'tree',
    root : root3,
    enableDrop : true,
    // enableDrag:true,
    title : '我是一颗小小草',
    collapsible : true,
    width : 300
});
root3.expand();
}

function addTab(tabName){
    var c = Ext.getCmp('centerPanel');
    //c.removeAll();
    var canAdd = true;
    c.items.each(function(item,index,length) {
        if(item.title==tabName){
            canAdd = false;
            return;
        }
       console.log(item.title+","+index+","+length);
        // Ext.Msg.alert('信息提示', '正在添加一个tab！');
    });
    /*var panel = new Ext.Panel({
       // id:'my_panel',
        title: tabName,
        renderTo: document.body,
        html:"test测试"
    });*/

   var panel = {
        contentEl: 'center3',
        title: tabName,
        autoScroll: true,
        closable:true,
        autoload:true,//http://www.baidu.com
        html:' <iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+'window.html'+'"> </iframe>'
        /*listeners: {
            activate: function (tab) {
                tab.loader.load();
            }
        }*/
            //loader: { 'tree.html', loadMask: 'loading...', autoLoad: true, scripts: true }
    };
    if(canAdd){
       /* c.add({
            contentEl: 'center3',
            title: tabName,
            autoScroll: true,
            closable:true,
            autoload:true
        });*/
       /* Ext.Ajax.request({
            url:'tree.html',
            success: function(response,options){
                console.log('load html is :'+response.responseText);//"<a href='XXX' >"+tabName+"</a>"
                //panel.body.update(response.responseText);
                panel.html=response.responseText;
            }
        });*/
        c.add(panel);
        c.setActiveTab(c.items.length-1);
    }
    c.doLayout();
}