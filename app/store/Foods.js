Ext.define('BintoTouch.store.Foods', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'BintoTouch.model.Food',
        proxy: {
            type: 'ajax',
            url : 'http://binto.codedeck.com/dishes/suggest.json'
        }
    },
});
