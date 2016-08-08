require.config({
    baseUrl: './',
    paths: {
        'avalon'           : './bower_components/avalon/dist/avalon.modern.shim',
        'controllers'      : './src/controllers/controllers',
        'indexController'  : './src/controllers/indexController',
        'formController'   : './src/controllers/formController',
        'todoMvcController': './src/controllers/todoMvcController',
        'treeController'   : './src/controllers/treeController',
    }
});

require(['controllers'], function(controllers) {
    for(var i in controllers) {
        if(controllers[i].init) {
            controllers[i].init();
        }
    }
});