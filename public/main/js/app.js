var copsiApp = angular.module('copsiApp', ['ngRoute', 'angularCSS','ui.bootstrap']);
copsiApp.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/alumnos', {
        templateUrl: '../main/views/alumnos.html'
        //,css: '../css/data-table.css'
    }).when('/biblioteca', {
        templateUrl: '../main/views/biblioteca.html'
    }).when('/cursos', {
        templateUrl: '../main/views/cursos.html'
    }).when('/', {
        templateUrl: '../main/views/dashboard.html'
    }).when('/diplomados', {
        templateUrl: '../main/views/diplomados.html'
    }).when('/inventario', {
        templateUrl: '../main/views/inventario.html'
    }).when('/personal', {
        templateUrl: '../main/views/personal.html'
    }).when('/talleresdh', {
        templateUrl: '../main/views/talleres.html'
    }).when('/talleresfs', {
        templateUrl: '../main/views/talleres.html'
    }).when('/alumnos/agregar', {
        templateUrl: '../main/views/alumnosAgregar.html'
    }).when('/alumnos/:id', {
        templateUrl: '../main/views/alumnosIndividual.html'
    }).otherwise({redirectTo: '/main'
    });
}).filter('startFrom', function(){
    return function(data, start){
        if (!data || !data.length){ return; }
        start =+ start;
        return data.slice(start);
    }
});


copsiApp.controller('bodyController', ['$scope','$rootScope', '$location',
    function($scope, $rootScope, $location){
        $rootScope.$on('$RouteChangeSuccess', function(e, current, pre){
            var dec = $location.path().split('/');
            $scope.loc = '/' + dec[1];
        });
    }
    
]);
