Ext.define('BintoTouch.view.result.List', {
    extend: 'Ext.Container',
    alias: 'widget.resultlist',
    config: {

                title: 'Search',
                iconCls: 'search',

                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type:'vbox',
                    pack: 'start',
                    align: 'center',
                },


                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Binto'
                    },
                    {
                        xtype: 'result',
                        id: 'resultPanel',
                        hidden: true
                    },
                    {
                        docked: 'bottom',
                        xtype: 'button',
                        text: 'Suggest me!',
                        id: 'randomButton',
                        ui: 'confirm-round',
                        cls: 'randomBt'
                    }
                ]
            }

    
});