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
                iconCls: 'home',

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
                        text: 'Random',
                        listeners: {
                            tap: function() {
                                console.log('You tapped me');
                            }
                        }
                    }
                ]
            },
            {
                title: 'Add',
                iconCls: 'action',

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
