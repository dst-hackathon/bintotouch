Ext.define('BintoTouch.model.Food', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'image_code', type: 'object'},
            { name: 'name', type: 'string' },
            { name: 'price', type: 'string' }
            // { name: 'host', convert: function(v, r) {
            // 	r = r.data;
            // 	return 'http://binto.codedeck.com' + r.image_code.url;
            // }}
        ]
    }
});
