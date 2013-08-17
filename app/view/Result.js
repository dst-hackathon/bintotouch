Ext.define('BintoTouch.view.Result', {
    extend: 'Ext.Panel',
    xtype: 'result',
    requires:[
        'Ext.Img'
    ],

    config: {
        store: 'Foods',

        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },

        items: [
            {
                xtype: 'panel',
                id: 'foodImage'
            },
            {
                xtype: 'panel',
                id: 'foodDetails',
                layout: {
                    type: 'vbox',
                    align: 'center'
                }
            }
        ]
    }
});