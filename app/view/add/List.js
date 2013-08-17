Ext.define('BintoTouch.view.add.List', {
    extend: 'Ext.Container',
    alias: 'widget.addlist',
	xtype: 'addView',
	
    requires: [
        'Ext.Button',
        'Ext.ux.Fileup'
    ],
	
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
			            itemId: 'fileLoadBtn',
			            xtype: 'fileupload',
						margin: '0 20',
			            autoUpload: true,
			            loadAsDataUrl: true,
			            states: {
			            	browse: {
								text: 'Browse and load'
			                },
			                ready: {
			                	text: 'Load'
			                },
							uploading: {
			                	text: 'Loading',
			                    loading: true
			                }
						}
					},
					{
						xtype: 'button',
						text: 'Upload Image',
						margin: '0 20'
					}
				]
		},
		{
				itemId: 'loadedImage',
			    xtype: 'img',
			    width: '80%',
			    height: '100px',
			    style: 'margin-top:15px;'
		}
		]           
    }
});