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
            foodImg: '#showImg',
            resultView: '#resultView'
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
                var url = store.getAt(0).getData().image_code.url;
                this.getFoodImg().src = "http://binto.codedeck.com" + url;
                this.getResultView().refresh();
            },
            scope: this
        });
    }
});
