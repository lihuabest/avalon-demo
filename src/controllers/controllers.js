define(function(require, exports, module) {
    var indexController   = require('indexController');
    var formController    = require('formController');
    var todoMvcController = require('todoMvcController');
    var treeController    = require('treeController');
    var dialogController  = require('dialogController');

    return {
        indexController  : indexController,
        formController   : formController,
        todoMvcController: todoMvcController,
        treeController   : treeController,
        dialogController : dialogController
    };
});