Ext.define('BintoTouch.view.Result', {
    extend: 'Ext.Container',
    xtype: 'result',
    config: {
       	items: [
        {
            xtype: 'image',
            src: 'resources/images/food.jpg',
            mode: 'image'
        },
        {
            html: "Second Item"
        },
        {
            html: "Third Item"
        },
        {
            html: "Fourth Item"
        }
    ]
    }
});