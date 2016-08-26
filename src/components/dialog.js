define(function(require, exports, module) {
    var avalon = require('avalon');

    var tpl = [
        '<div class="dialog">',
            '<div class="dialog-content">',
                '<div class"dialog-title">{{title | html}}</div>',
                '<div class"dialog-content">{{content | html}}</div>',
                '<div>',
                    '<button ms-click="okClick">确定</button>',
                    '<button ms-click="cancelClick" ms-visible="type===\'confirm\'">取消</button>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    var noop = function() {};

    avalon.component('ms:dialog', {
        $template: tpl,
        title: '',
        content: '',
        type: 'alert',
        $ready: function(vm, elem, vms) {
            console.log(vm)

            vm.okClick = function() {
                vm['okClickCb'] && vm['okClickCb']();
            };

            vm.cancelClick = function() {
                vm['cancelClickCb'] && vm['cancelClickCb']();
            };
        },
        okClick: noop,
        cancelClick: noop
    });

    return avalon;
});