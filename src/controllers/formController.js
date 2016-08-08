define(function(require, exports, module) {
    var avalon = require('avalon');

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
        }
    });

    vmodel.$watch("languages", function(l) {
        // console.log(l);
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