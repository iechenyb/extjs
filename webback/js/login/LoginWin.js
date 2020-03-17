/*
 * 用户登录
 */
Ext.ns("App");
App.LoginWin = function() {
	return {
		show: function() {
			if(!this.win) {
				this.win = this.getWin();
			}
			this.win.show();
		},
		getWin: function() {
			var form = this.getForm();
			var win = new Ext.Window({
				title: "用户登录",
				//cls:'customBackground',
				bodyStyle:"background-image:url(img/bg.jpg)",
				width: "30%",
				height: 200,
				plain: true,
				resizable: false,
				closable: false,
				//baseCls:'ex-panel',
				//draggable: true,
				//frame: true,
				layout: "fit",
				border: false,
				modal: true,
				items: [form]
			});
			this.form = form;
			return win;
		},
		getForm: function() {
			var form = new Ext.form.FormPanel({
				labelWidth: 70,
				buttonAlign: "center",
				bodyStyle: "padding:10px;",
				frame: true,
				cls:'customBackground',
				baseCls:'ex-panel',
				defaultType: "textfield",
				defaults: {
					allowBlank: false,
					anchor: "98%",
					enableKeyEvents: false
				},
				items: [{
					xtype: "displayfield",
					hideLabel: true,
					html: "<center><font size='5rem'>蓝海密剑后台管理系统</font></center><br>"
				}, {
					id:"username",
					name: "username",
					fieldLabel: "用户名",
					value: "Neo"
				}, {
					id:"password",
					inputType: "password",
					name: "password",
					fieldLabel: "密码",
					value: "123456"
				},{
					id:"msg",
					xtype: "displayfield",
					hideLabel: true,
					html: ""
				}],
				buttons: [{
					id:"loginBtn",
					text: "登录",
					disabled:false,
					scope: this,
					handler: function() {
						this.submit();
					}
				}, {
					text: "重置",
					scope: this,
					handler: function() {
						this.form.getForm().reset();
					}
				}]
			});
			return form;
		},
		submit: function() {
			if(this.form.getForm().isValid()) {
				//alert(this.form.get("username").value+"/"+this.form.get("password").value);
				//this.form.get("loginBtn").disable();
				//this.form.get("loginBtn").setDisabled(true);
				this.form.get("msg").update("<center>login ...</center>");
				this.form.buttons[0].disabled = true;
				sleep(1000);
				window.location.href = "index.html";
			}
		}
	};
}();