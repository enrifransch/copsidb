var copsiApp = angular.module('copsiApp', ['ngRoute', 'angularCSS','ui.bootstrap']);
copsiApp.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/alumnos', {
        templateUrl: '../main/views/alumnos.html'
        //,css: '../css/data-table.css'
    }).when('/alumnos/agregar', {
        templateUrl: '../main/views/alumnosAgregar.html'
    }).when('/alumnos/:id', {
        templateUrl: '../main/views/alumnosIndividual.html'
    }).when('/alumnos/editar/:id', {
        templateUrl: '../main/views/alumnosEditar.html'
    }).when('/biblioteca', {
        templateUrl: '../main/views/biblioteca.html'
    }).when('/biblioteca/agregar', {
        templateUrl: '../main/views/bibliotecaAgregar.html'
    }).when('/biblioteca/:id', {
        templateUrl: '../main/views/bibliotecaIndividual.html'
    }).when('/biblioteca/editar/:id', {
        templateUrl: '../main/views/bibliotecaEditar.html'
    }).when('/cursos', {
        templateUrl: '../main/views/cursos.html'
    }).when('/cursos/agregar', {
        templateUrl: '../main/views/cursosAgregar.html'
    }).when('/cursos/:id', {
        templateUrl: '../main/views/cursosIndividual.html'
    }).when('/cursos/editar/:id', {
        templateUrl: '../main/views/cursosEditar.html'
    }).when('/', {
        templateUrl: '../main/views/dashboard.html'
    }).when('/diplomados', {
        templateUrl: '../main/views/diplomados.html'
    }).when('/diplomados/agregar', {
        templateUrl: '../main/views/diplomadosAgregar.html'
    }).when('/diplomados/editar/:id', {
        templateUrl: '../main/views/diplomadosEditar.html'
    }).when('/diplomados/:id', {
        templateUrl: '../main/views/diplomadosIndividual.html'
    }).when('/inventario', {
        templateUrl: '../main/views/inventario.html'
    }).when('/inventario/agregar', {
        templateUrl: '../main/views/inventarioAgregar.html'
    }).when('/inventario/:id', {
        templateUrl: '../main/views/inventarioIndividual.html'
    }).when('/inventario/editar/:id', {
        templateUrl: '../main/views/inventarioEditar.html'
    }).when('/personal', {
        templateUrl: '../main/views/personal.html'
    }).when('/personal/agregar', {
        templateUrl: '../main/views/personalAgregar.html'
    }).when('/personal/:id', {
        templateUrl: '../main/views/personalIndividual.html'
    }).when('/personal/editar/:id', {
        templateUrl: '../main/views/personalEditar.html'
    }).when('/talleresDH', {
        templateUrl: '../main/views/talleresDH.html'
    }).when('/talleresDH/agregar', {
        templateUrl: '../main/views/talleresDHAgregar.html'
    }).when('/talleresDH/:id', {
        templateUrl: '../main/views/talleresDHIndividual.html'
    }).when('/talleresDH/editar/:id', {
        templateUrl: '../main/views/talleresDHEditar.html'
    }).when('/talleresFS', {
        templateUrl: '../main/views/talleresFS.html'
    }).when('/talleresFS/agregar', {
        templateUrl: '../main/views/talleresFSAgregar.html'
    }).when('/talleresFS/:id', {
        templateUrl: '../main/views/talleresFSIndividual.html'
    }).when('/talleresFS/editar/:id', {
        templateUrl: '../main/views/talleresFSEditar.html'
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
