define(function(require, exports, module) {
    var avalon = require('avalon');

    var tpl = [
        '<div class="dialog">',
            '<div class="dialog-content">',
            '</div>',
        '</div>'
    ].join('');

    var bindingLists = [];

    var dialog = avalon.directive('dialog', {
        init: function(binding) {
            bindingLists.push(binding);
            binding.setAttribute('ms-visible', 'isShow');
            // var elem = binding.element;

            // var content;
            // var dialogHtml = $('.dialog');
            // if(dialogHtml.length <= 0) {
            //     $('body').append(tpl);
            //     dialogHtml = $('.dialog');
            //     content = dialogHtml.children('.dialog-content');
            //     content.append($(elem));
            // } else {
            //     content = dialogHtml.children('.dialog-content');
            //     content.empty();
            //     content.append($(elem));
            // }

            console.log(binding)

            // var vmodels = binding.vmodels;

            // console.log(elem);
            // console.log(vmodels);
        },
        update: function(value, oldValue) {
            dialog.isShow = value;

            var dialogHtml = $('.dialog');
            if(dialog.isShow) {
                dialogHtml.show();
            } else {
                dialogHtml.hide();
            }
        },

        isShow: false

    });
    
    return dialog;
});