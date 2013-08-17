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
                id: 'foodImage',
                
                items: [
                {
                    xtype: 'image',
                    src: 'http://binto.codedeck.com/uploads/dish/image_code/1/994322_10151692928931475_1595007416_n.jpg',
                    mode: 'image',
                    width: '100%'
                }
                ] 
            },
            {
                xtype: 'panel',
                id: 'foodDetails',
                layout: 'hbox',
                items: [
                {
                    html: "Restaurant",
                    margin: 2,
                    cls: 'resName'
                },
                {
                    html: "Price",
                    margin: 2,
                    cls: 'resName'
                }
                ]
            }
    ]
    }
});