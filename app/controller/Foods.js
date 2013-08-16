Ext.define('BintoTouch.controller.Foods', {
    extend: 'Ext.app.Controller',

    config: {
    	control: {
            randomButton: {
                tap: 'doRandom'
            }
        },

        refs: {
            randomButton: '#randomButton'
        }
    },

    init: function() {
        console.log('Initialized controller');
    },

    doRandom: function() {
    	console.log('Random');
    }
});