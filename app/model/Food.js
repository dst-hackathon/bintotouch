Ext.define('BintoTouch.model.Food', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'restaurant', type: 'string' },
            { name: 'price', type: 'string' }
        ]
    }
});
