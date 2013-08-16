Ext.define('BintoTouch.view.Result', {
    extend: 'Ext.Container',
    xtype: 'result',
    config: {
        layout: {
            type: 'vbox',
            align: 'center'
        },

       	items: [
        {
            html: "Place",

        },
        {
            html: "Price",
        },
        {
            xtype: 'image',
            src: 'resources/images/food.jpg',
            mode: 'image',
            height: 400
        }
    ]
    }
});