Ext.define('BintoTouch.view.Result', {
    extend: 'Ext.Panel',
    xtype: 'result',
    requires:[
        'Ext.Img'
    ],

    config: {

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
                src: 'resources/images/food.jpg',
                mode: 'image',
                width: '100%'
            }
            ] 
        }
    ]
    }
});