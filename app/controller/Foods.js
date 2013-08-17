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
                var url = "http://binto.codedeck.com" + store.getAt(0).getData().image_code;
                console.log('url', url);
                var resName = store.getAt(0).getData().restaurant_name;
                var dish = store.getAt(0).getData().name;
                var price = store.getAt(0).getData().price;
                if (Ext.isEmpty(resName)){
                    resName = ' ';
                }
                if (Ext.isEmpty(dish)){
                    dish = ' ';
                }
                if (Ext.isEmpty(price)){
                    price = ' ';
                }
                
                this.getFoodImage().removeAll();
                this.getFoodImage().add({
                    xtype: 'image',
                    src: url,
                    mode: 'image',
                    width: '100%'
                });

                this.getFoodDetails().removeAll();
                this.getFoodDetails().add({
                    html: '<b>Dish name : ' + Ext.String.htmlEncode(dish),
                    cls: 'dishStyle'
                },{
                    html: '<b>Price : ' + Ext.String.htmlEncode(price),
                    cls: 'priceStyle'
                },{
                    html: '<b>Restaurant : ' + Ext.String.htmlEncode(resName),
                    cls: 'resStyle'
                });
                
            },
            scope: this
        });
    }
});
