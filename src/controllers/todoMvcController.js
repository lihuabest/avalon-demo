define(function(require, exports, module) {
    var avalon = require('avalon');

    var vmodel = avalon.define({
        $id: 'todoMvcController',

        text: null,
        texts: [],
        textKeydown: function($event) {
            if($event.keyCode === 13) {
                if(vmodel.selectAll) {
                    vmodel.texts.push({
                        text: $event.target.value,
                        checked: true,
                        close: false
                    });
                } else {
                    vmodel.texts.push({
                        text: $event.target.value,
                        checked: false,
                        close: false
                    });
                }
                $event.target.value = '';
            }
        },
        oneSelectChange: function() {
            var nums = 0;
            vmodel.texts.forEach(function(item) {
                if(item.checked) {
                    nums ++;
                }
            });

            if(nums === vmodel.texts.length) {
                vmodel.selectAll = true;
            } else {
                vmodel.selectAll = false;
            }
        },
        closeClick: function(el) {
            el.close = !el.close;
        },
        deleteClick: function($index) {
            vmodel.texts.splice($index, 1);
        },

        selectAll: false,
        allSelectChange: function() {
            if(vmodel.selectAll) {
                vmodel.texts.forEach(function(item) {
                    item.checked = true;
                });
            } else {
                vmodel.texts.forEach(function(item) {
                    item.checked = false;
                });
            }
        }

    });

    return {
        init: function() {

        }
    };
});