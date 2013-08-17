Ext.define('BintoTouch.view.Result', {
    extend: 'Ext.Panel',
    xtype: 'result',
    requires:[
        'Ext.Img'
    ],

    config: {
        itemId: 'resultView',
        store: 'Foods',

        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },

        items: [
        {
            xtype: 'panel',
            id: 'foodDetails',
            
            items: [
            {
                html: "Restaurant",
                margin: 2
            },
            {
                html: "Price",
                margin: 2
            }
            ]
        },
        {
            xtype: 'panel',
            id: 'foodImage',
            
            items: [
            {
                xtype: 'image',
                id: 'showImg',
                src: '',
                mode: 'image',
                width: '100%'
            }
            ] 
        }
    ]
    }
});