Ext.define('BintoTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'BintoTouch.view.Result'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Search',
                iconCls: 'search',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Binto'
                    },
                    {
                        xtype: 'result'
                    },
                    {
                        xtype: 'button',
                        text: 'Random'
                    }
                ]
            },
            {
                title: 'Add',
                iconCls: 'add',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Add'
                    }
                ]
            }
        ]
    }
});
