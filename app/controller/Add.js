Ext.define('BintoTouch.controller.Add', {
	extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.device.Notification',
        'Ext.Img'
    ],
    
    config: {
        refs: {
            'fileLoadBtn': 'addView #fileLoadBtn',
            'loadedImage': 'addView #loadedImage'
        },
        
        control: {
            fileLoadBtn: {
                loadsuccess: 'onFileLoadSuccess',
                loadfailure: 'onFileLoadFailure'
            }
        }
    },
    
    init: function() {
        console.log('Initialized Add controller');
    },
    
    onFileUploadSuccess: function() {
        console.log('Success');
        
        Ext.device.Notification.show({
            title: 'All right',
            message: 'File uploaded successfully',
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },
    
    onFileUploadFailure: function(message) {
        console.log('Failure');
                
        Ext.device.Notification.show({
            title: 'Uploading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    },
    
    onFileLoadSuccess: function(dataurl, e) {
        console.log('File loaded');
        
        var me = this;
        var image = me.getLoadedImage();
        image.setSrc(dataurl);
		console.log(dataurl);
    },
    
    onFileLoadFailure: function(message) {
        Ext.device.Notification.show({
            title: 'Loading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });
    }
});