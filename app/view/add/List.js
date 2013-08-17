Ext.define('BintoTouch.view.add.List', {
    extend: 'Ext.Container',
    alias: 'widget.addlist',
    config: {
        title: 'Add',
        iconCls: 'add',
        iconMask: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [{
                xtype: 'searchfield',
                placeHolder: 'Search by keywords...',
                flex: 1
            }]
        }]
    }

    
});