define(function(require, exports, module) {
    var avalon = require('avalon');

    var vmodel = avalon.define({
        $id: 'treeController',
        trees: [],
        message: '我来自父容器',
        title: '',
        nameClick: function(el) {
            alert(el.name)
        }
    });

    vmodel.$watch('message', function(msg) {
        console.log(msg);
    });

    var template = '<div>' +
                        '<div ms-repeat="trees">' +
                            '<span>{{el.name}}</span>' +
                            '<div ng-if="el.child && el.child.length>0">' +
                                '<ms:tree config="el.child">' +
                                '</ms:tree>'
                            '</div>' +
                        '</div>' +
                    '</div>';
    var template2 = '<div>{{message}}</div>';

    avalon.component('ms:tree', {
        $template: template2,
        $init: function(vm, element) {
            // console.log(vm)
        },
        $ready: function() {
            var _this = this;

            setTimeout(function() {
                _this.message = '我是修改后的message';
            }, 2000);
        },
        $dispose: function() {

        }
    });

    return {
        init: function() {
            vmodel.trees = [{
                name: '中国',
                child: [{
                    name: '四川',
                    child: [{
                        name: '成都'
                    }, {
                        name: '自贡'
                    }]
                }, {
                    name: '重庆',
                    child: [{
                        name: '璧山'
                    }, {
                        name: '武陵'
                    }]
                }]
            }, {
                name: '美国',
                child: [{
                    name: '德克萨斯'
                }, {
                    name: '纽约'
                }]
            }];

            setTimeout(function() {
                // 查找一个全局变量
                avalon.vmodels.indexController.title = "我是子容器定义的title";
            }, 2000);
        }
    };
});