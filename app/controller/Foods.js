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
            resultPanel: '#resultPanel'
        }
    },

    init: function() {
        console.log('Initialized controller');
    },

    doRandom: function() {
    	console.log('Random');
        this.getRandomButton().show({type :"slide",direction : "down", duration : 500});
        this.getResultPanel().show({type :"slide",direction : "down", duration : 500});

        var store = Ext.create('BintoTouch.store.Foods');
        store.load();
    }
});
