require.config({
    baseUrl: './',
    paths: {
        'avalon'           : './bower_components/avalon/dist/avalon.modern.shim',
        'jquery'           : './bower_components/jquery/dist/jquery',

        'controllers'      : './src/controllers/controllers',
        'indexController'  : './src/controllers/indexController',
        'formController'   : './src/controllers/formController',
        'todoMvcController': './src/controllers/todoMvcController',
        'treeController'   : './src/controllers/treeController',
        'dialogController' : './src/controllers/dialogController',

        'dialog'           : './src/components/dialog'
    }
});

require(['jquery'], function() {
    require(['controllers'], function(controllers) {
        for(var i in controllers) {
            if(controllers[i].init) {
                controllers[i].init();
            }
        }
    });
});
