Ext.define('BintoTouch.model.Food', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'image_code', type: 'string'},
            { name: 'name', type: 'string' },
            { name: 'restaurant_name', type: 'string' },
            { name: 'price', type: 'string' }
        ]
    }
});
