define(function(require, exports, module) {
    var avalon = require('avalon');
    require('dialog');

    var vmodel = avalon.define({
        $id: 'dialogController',

        titleClick: function() {
            alert('我是标题点击');
        },

        title: '我是标题',

        content: '我是内容',

        okClickCb: function() {
            alert(22);
        },

        isShowDialog: false,
        showDialogClick: function() {
            vmodel.isShowDialog = true;
        },
        dialogConfig: {
            okClickCb: function() {
                alert('ok');
                vmodel.isShowDialog = false;
                vmodel.title = '我是修改后的标题';
            },
            cancelClickCb: function() {
                vmodel.isShowDialog = false;
                alert('cancel');
            },
            type: 'confirm'
        }
    });

    return {
        init: function() {

        }
    };
});