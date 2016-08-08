define(function(require, exports, module) {
    var avalon = require('avalon');

    var vmodel = avalon.define({
        $id: 'indexController',
        title: ''
    });

    return {
        init: function() {
            vmodel.title = 'Avalon Demo';
        }
    };
});