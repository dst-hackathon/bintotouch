Ext.define('BintoTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [{
            xtype: 'resultlist'
        },{
            xtype: 'addlist'
        },{
            disabled: true,
            xtype: 'userlist'
        }]
    }
});
