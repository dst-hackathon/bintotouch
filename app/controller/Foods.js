Ext.define('BintoTouch.controller.Foods', {
    extend: 'Ext.app.Controller',

    models: [
        'Food'
    ],

    config: {
    	control: {
            randomButton: {
                tap: 'doRandom'
            }
        },

        refs: {
            randomButton: '#randomButton',
            resultPanel: '#resultPanel',
            foodImage: '#foodImage',
            foodDetails: '#foodDetails'
        }
    },

    init: function() {
        console.log('Initialized controller');
    },

    doRandom: function() {
    	console.log('Random');
        this.getResultPanel().show({type :"fadeIn",direction : "down", duration : 500});

        //var store = Ext.create('BintoTouch.store.Foods');
        var store = Ext.getStore('Foods');
        store.load({
            callback: function(records, operation, success) {
                var url = "http://binto.codedeck.com" + store.getAt(0).getData().image_code.url;
                console.log('url', url);
                var resName = store.getAt(0).getData().name;
                var price = store.getAt(0).getData().price;
                
                this.getFoodImage().removeAll();
                this.getFoodImage().add({
                    xtype: 'image',
                    src: url,
                    mode: 'image',
                    width: '100%'
                });

                this.getFoodDetails().removeAll();
                this.getFoodDetails().add({
                    html: '<b>Restaurant : <b>' + resName,
                    cls: 'resName'
                },{
                    html: '<b>Price : <b>' + price,
                    cls: 'resName'
                });
                
            },
            scope: this
        });
    }
});
