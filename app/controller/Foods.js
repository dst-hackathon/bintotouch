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
                // this.getFoodImg().src = url;
                console.log('url', url);
                // this.getFoodDetails().items.get(0)._html = 'haaaaaaaaaaaa';
                // console.log('panel', this.getFoodDetails().items.get(0)._html);
                // var a = Ext.create('')
                this.getFoodImage().add({
                    xtype: 'image',
                    // src: 'http://binto.codedeck.com/uploads/dish/image_code/1/994322_10151692928931475_1595007416_n.jpg',
                    src: url,
                    mode: 'image',
                    width: '100%'
                });
                
                // this.getFoodImg().src = "http://binto.codedeck.com" + url;
                // Ext.create('BintoTouch.view.Result');
            },
            scope: this
        });
    }
});
