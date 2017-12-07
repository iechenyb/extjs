/*
 * 角色管理
 */

App.Role = function() {
	return {
		//定义变量
		currentFormValues: {},
		
		//初始化
		render: function(id) {
			if(!this.store) {
				this.store = this.getStore();
			}
			if(!this.form) {
				this.form = this.getForm();
			}
			if(!this.win) {
				this.win = this.getWin();
			}
			console.log("grid id is "+id);
			this.createGrid(id);
		},
		
		//获取store
		getStore: function() {
//			var store = new Ext.data.ArrayStore({
//				fields: ["id", "name", "desc"],
//				data: [
//					["1", "超级管理员", "拥有系统的所有权限"],
//					["2", "管理员", "拥有系统的部分管理权限"],
//					["3", "网站编辑", "拥有文章的创建、发布、修改、删除权限"]
//				]
//			});
			var reader=new Ext.data.JsonReader({
				root: 'data',
				totalProperty: 'count',
				id:'id',
			},[{name:'id'},
				{name:'name'},
				{name:'desc'}
			]);
			var store = new Ext.data.JsonStore({
				//store configs
				pageSize:20,
				storeId: "roleStore",
				autoLoad: true,
				//baseP:{start:0,limit:10},
				baseParams: { start:0,limit:10,query: '' },
				fields: [
					{name: "id"},
					{name: "name"},
					{name: "desc"}
				],
				proxy: new Ext.data.HttpProxy({
					//url: "data/role.json",
					url:"http://localhost:8088/comweb/common/roles.do",
					method: 'GET'
				}),
				reader: reader,
				//url: "data/role.json",
				//reader configs
				//totalProperty: "total",
				lastOptions: {params: {start: 0, limit: 10}},
				root: "data"//rows
			});
			/*Ext.Ajax.request({
				url: 'http://localhost:8088/comweb/common/roles.do',
				headers: {
					'userHeader': 'userMsg'
				},
				params: { a: 10, b: 20 },
				method: 'GET',
				success: function (response, options) {
					Ext.MessageBox.alert('成功', '从服务端获取结果: ' + response.responseText);
				},
				failure: function (response, options) {
					Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
				}
			});*/
			/*var begin=0;
			var end=10;//baseParams*/
			//Ext.apply(store.paramNames, { begin: 0, end: 20 });
			/*store.load({
			 paramNames: {
					start: 1,
					limit: 20
				}
			});*/
			store.load({params: { start: 0, limit: 10} });
			return store;
		},
		
		//创建表单
		getForm: function() {
			var form = new Ext.form.FormPanel({
				labelWidth: 70,
				buttonAlign: "center",
				bodyStyle: "padding:10px;",
				frame: true,
				defaultType: "textfield",
				defaults: {
					allowBlank: false,
					anchor: "98%",
					enableKeyEvents: false
				},
				items: [{
					xtype: "hidden",
					name: "id",
					value: ""
				}, {
					name: "name",
					fieldLabel: "角色名称"
				}, {
					name: "desc",
					xtype: "textarea",
					fieldLabel: "描述"
				}],
				buttons: [{
					text: "确定",
					scope: this,
					handler: function() {
						this.submit();
					}
				}, {
					text: "重置",
					scope: this,
					handler: function() {
						this.form.getForm().reset();
						this.form.getForm().setValues(this.currentFormValues);
						this.form.getForm().clearInvalid();
					}
				}]
			});
			return form;
		},
		
		//提交表单
		submit: function() {
			var fr = this.form.getForm();	//获取BasicForm对象
			if(fr.isValid()) {
				var id = fr.findField("id").getValue();
				if(id) { //编辑
					var rec = this.store.getById(id);
					rec.set("name", fr.findField("name").getValue());
					rec.set("desc", fr.findField("desc").getValue());
//					this.store.rejectChanges();	//取消所有修改
					Ext.Ajax.request( {
						url : 'http://localhost:8088/comweb/common/modRole.do',
						method : 'post',
						params : {
							name : fr.findField("name").getValue(),
							desc : fr.findField("desc").getValue()
						},
						success : function(response, options) {
							var o = Ext.util.JSON.decode(response.responseText);
							alert(o.msg);
						},
						failure : function() {
						}
					});
					this.store.commitChanges();	//提交修改数据
				}else {	//新增
					/*var RoleRecord = Ext.data.Record.create([
						{name: "id"},
						{name: "name"},
						{name: "desc"}
					]);*/
//					var rec = new RoleRecord({
//						id: "4",
//						name: "新增角色",
//						desc: "这是测试用的新增角色"
//					}, id);
					/*var obj = fr.getValues();
					obj.id = this.store.data.length+1;
					var rec = new RoleRecord(obj, obj.id);*/
					Ext.Ajax.request( {
						url : 'http://localhost:8088/comweb/common/addRole.do',
						method : 'post',
						params : {
							name : fr.findField("name").getValue(),
							desc : fr.findField("desc").getValue()
						},
						success : function(response, options) {
							var o = Ext.util.JSON.decode(response.responseText);
							alert(o);
						},
						failure : function() {
						}
					});
					//this.store.add(rec);
					//this.store.clear();
					this.store.reload();
				}
				//this.store.loadData([],false);
				this.win.hide();
//				this.store.reload();
			}
		},
		
	    //创建窗口
	    getWin: function() {
	    	var win = new Ext.Window({
	    		width: 400,
	    		height: 250,
	    		title: "",
	    		plain: true,
	    		resizable: false,
	    		frame: true,
	    		closeAction: "hide",
	    		border: false,
	    		modal: true,
	    		layout: "fit",
	    		items: [this.form],
	    		listeners: {
	    			scope: this,
	    			render: function(fp) {
	    				this.form.form.waitMsgTarget = fp.getEl();
	    			},
	    			show: function() {
	    				this.form.form.setValues(this.currentFormValues);
	    				this.form.form.clearInvalid();
	    			}
	    		}
	    	});
	    	return win;
	    },
		
		//创建Grid
		createGrid: function(id) {
			var panel = Ext.getCmp(id);
			panel.body.dom.innerHTML = "";
			var sm = new Ext.grid.CheckboxSelectionModel();
			
			this.grid = new Ext.grid.GridPanel({
				id:'roleList',
				tbar: [{
					text: "新增",
					iconCls: "x-btn-add",
					scope: this,
					handler: this.add
				}, "-", {
					text: "编辑",
					iconCls: "x-btn-edit",
					scope: this,
					handler: this.edit
				}, "-", {
					text: "删除",
					iconCls: "x-btn-del",
					scope: this,
					handler: this.del
				}, "->",  {
					id:"name-key",
					xtype: "textfield",
					emptyText: "名称"
				}, {
					id:"desc-key",
					xtype: "textfield",
					emptyText: "描述"/*,
					on:{
						"change":function (dd) {
							console.log("dd:"+dd);
						}
					}*/
					/*listeners:{
						change:this.keyChange,
						function(){
							var value = Ext.getComponent("roleList").getTopToolbar().getComponent('key').getValue();
							console.log("key is change  :"+value);
							/!*if(!value){
							 this.store.reload();
							 }else{}*!/
							//this.store.filter('desc', value);//过滤指定的记录
						}*!/
					}*//*,
					handler:this.keyChange*/
				}, {
					xtype: "button",
					text: "查询",
					iconCls: "x-btn-search",
					scope: this,
					handler: this.search
				}],
				bbar: new Ext.PagingToolbar({
					store: this.store,
					pageSize: 10,
					displayInfo: true,
					displayMsg: 'Displaying topics {0} - {1} of {2}'
				}),
				
				store: this.store,
				sm: sm,
				loadMask: { msg: 'loading……' },
				columns: [sm, {
					header: "编号",
					width: 100,
					sortable: true,
					dataIndex: "id"
				}, {
					header: "角色名称",
					width: 200,
					sortable: true,
					dataIndex: "name"
				}, {
					header: "描述",
					width: 300,
					sortable: false,
					dataIndex: "desc"
				}],
				
				border: false,
				viewConfig: {
					forceFit: true
				},
			});
			/*var keyObj = this.grid.getTopToolbar().getComponent('key');
			keyObj.on(
				{   scope:keyObj,
					mouseover:function(){
						var value = this.grid.getTopToolbar().getComponent('key').getValue();
						console.log(value);
					}
				});*/
			panel.add(this.grid);
		},
		keyChange:function(){
		/*	var value = this.grid.getTopToolbar().getComponent('key').getValue();
			console.log("key is change  :"+value);*/
			console.log("key is change!");
			/*if(!value){
				this.store.reload();
			}else{}*/
			this.store.filter('desc', 'ccc');//过滤指定的记录
		},
		//查询
		search: function() {
			//console.log("Search ...");
			//获取查询条件值
			var name = this.grid.getTopToolbar().getComponent('name-key').getValue();
			var desc = this.grid.getTopToolbar().getComponent('desc-key').getValue();
			//var value = this.grid.getTopToolbar().getComponent('key');
			console.log(name+"--"+desc);
			var data=[{
				"id": "1",
				"name": "超级管理员",
				"desc": "拥有系统的所有权限"
			}];
			//this.store.removeAll();
			//console.log(Ext.JSON.decode(data));
			//console.log(this.store.query("desc",value));
			/*this.store.findBy(function(record, id) {
				//console.log(id+","+record);
				return record.get('desc') == value ;
			});*/
			//this.store.loadData(Ext.JSON.decode(data),false);
			//this.store.reload();
			//var keyObj = this.grid.getTopToolbar().getComponent('key');
			/*keyObj.on(
				{   scope:keyObj,
					"mouseover":function(){
						var value = this.grid.getTopToolbar().getComponent('key').getValue();
						console.log(value);
					}
			});*/
			//console.log(keyObj);
			//this.store.filter('desc', desc);//过滤指定的字段
			if(!name&&!desc){
				//this.store.reload();
				this.store.load({paramNames:{start:0,limit:5}});
			}else {
				this.store.filterBy(function (record, id) {//过滤指定的多列
					//console.log(id+","+record);
					var has = record.get('desc') == desc && record.get("name") == name;
					console.log(has);
					return has;
				});
			}
		},
		//新增
		add: function() {
			this.win.setTitle("新增角色");
			Ext.apply(this.currentFormValues, {
				id: "",
				name: "",
				desc: ""
			});
			this.win.show();
		},
		
		//编辑
		edit: function() {
			if(this.grid.getSelectionModel().hasSelection()) {
				this.win.setTitle("编辑角色");
				var rec = this.grid.getSelectionModel().getSelected();
				Ext.apply(this.currentFormValues, {
					id: rec.data.id,
					name: rec.data.name,
					desc: rec.data.desc
				});
//				this.form.getForm().loadRecord(rec);
				this.win.show();
			}else {
				Ext.Msg.alert("信息", "请选择要编辑的角色！");
			}
		},
		
		//删除
		del: function() {
			if(this.grid.getSelectionModel().hasSelection()) {
				var st = this.store;
				var recs = this.grid.getSelectionModel().getSelections();
				var ids = "";
				//批量删除
				for(var i=0;i<recs.length;i++) {
					ids += recs[i].data.id+",";
				}
				alert(ids);
				Ext.Msg.confirm("确认", "确认删除以下角色？<br />"+ids, function(btn) {
					if(btn=="yes") {
						Ext.Ajax.request( {
							url : 'http://localhost:8088/comweb/common/delRole.do',
							method : 'post',
							params : {
								ids:ids
							},
							success : function(response, options) {
								var o = Ext.util.JSON.decode(response.responseText);
								alert(o);
							},
							failure : function() {
							}
						});
						st.remove(recs); //前台删除
						st.reload();
					}
				});
			}else {
				Ext.Msg.alert("信息", "请选择要删除的角色！");
			}
		}
	}
}();











