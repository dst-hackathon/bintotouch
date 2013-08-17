Ext.define('BintoTouch.view.add.List', {
    extend: 'Ext.Container',
    alias: 'widget.addlist',
    config: {
        title: 'Add',
        iconCls: 'add',
        iconMask: true,
        styleHtmlContent: true,
        scrollable: true,
        layout: {
			type:'vbox',
        	align: 'center'
        },
        items: [
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Binto'
        },{
				xtype: 'fieldset',
				width: 620,
				name: 'inputFields',
				title: 'Add Information here....',
				items:[
	                	{
	                    	xtype: 'textfield',
							labelWidth: 120,
	                    	name : 'restaurantName',
	                    	label: 'Restaurant Name'
	                	},
	                	{
	                    	xtype: 'textfield',
							labelWidth: 120,
	                    	name : 'foodName',
	                    	label: 'Food Name'
	                	},
	                	{
	                    	xtype: 'textfield',
							labelWidth: 120,
	                    	name : 'price',
	                    	label: 'Price'
	                	}
				]
		},
		{
			xtype: 'container',
			layout:{
				type: 'hbox',
				align: 'center'
			},
			items:[
						{
							xtype: 'button',
							text: 'Browse Image',
							margin: '0 20'
						},
						{
							xtype: 'button',
							text: 'Upload Image',
							margin: '0 20'
						}
			]
		}
		// {
		//             xtype: 'toolbar',
		//             docked: 'top',
		//             ui: 'light',
		//             items: [{
		//                 xtype: 'searchfield',
		//                 placeHolder: 'Search by keywords...',
		// 		flex: 1
		//             }]
		//         },
		]           
    }
});