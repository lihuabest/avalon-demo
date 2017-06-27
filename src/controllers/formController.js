define(function(require, exports, module) {
    var avalon = require('avalon');

    avalon.duplexHooks.integer = {
        get: function(val, binding) {
            if(val != '') {
                var v = translate(val);
                binding.element.value = v;
                return v;
            }
        },
        set: function(val) {
            return val;
        }
    };

    function translate(val) {
        var old = val + '';

        while(!/^[0-9]*$/.test(old)) {
            old = old.substr(0, old.length - 1);
        }

        return Number(old);
    }

    var vmodel = avalon.define({
        $id: 'formController',
        text: '',
        checkboxOne: false,
        checkboxArray: [],
        radioString: null,
        selects: ['avalon', 'react', 'angular'],
        select: '',
        languages: [],
        languagesSelect: '',
        changedEvent: function(val, $event) {
            // console.log(val);
            // console.log($event);
            // console.log(this);
        },
        languageChanged: function(val, obj) {
            vmodel.caculateLanguages();
        },
        languageEvent: function(event) {
            // console.log(event);
        },
        caculateLanguages: function() {
            var temp = [];
            vmodel.languages.forEach(function(item) {
                if(item.checked) {
                    temp.push(item.name);
                }
            });

            vmodel.languagesSelect = temp.join(' ');
        },

        inputNumber: '',

        checkboxAll: [],
        selectAllChange: function() {

        },
        checkboxAllClick: function() {
            if(vmodel.checkboxAll.length) {
                vmodel.checkboxAll.clear();
            } else {
                vmodel.checkboxAll.push('on');
            }
        }
    });

    vmodel.$watch('languages', function(l) {
        // console.log(l);
    });

    vmodel.$watch('inputNumber', function(value, oldValue) {
        // var v = translate(value);
        // vmodel.inputNumber = v;
    });

    return {
        init: function() {
            vmodel.text = '我是默认值';

            vmodel.languages = [{
                name: 'avalon',
                checked: false
            }, {
                name: 'react',
                checked: true
            }, {
                name: 'angular',
                checked: true
            }];

            vmodel.caculateLanguages();
        }
    };
});