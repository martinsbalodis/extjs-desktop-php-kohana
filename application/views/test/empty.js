Ext.define('MyDesktop.Test.empty', {
    extend: 'Ext.ux.desktop.Module',

    init : function(){
        this.launcher = {
            text: 'Empty window',
            iconCls:'bogus',
            handler : this.createWindow,
            scope: this
        }
    },
	windowId: 'empty-window',

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus'+src.windowId);
        if(!win){
			
            win = desktop.createWindow({
                id: 'bogus'+src.windowId,
                title:src.text,
                width:640,
                height:480,
                html : '<p>Something useful would be in here.</p>',
                iconCls: 'bogus',
                animCollapse:false,
                constrainHeader:true
            });
			
        }
        win.show();
        return win;
    }
});