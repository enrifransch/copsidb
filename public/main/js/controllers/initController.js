angular.module('copsiApp')
.controller('initCursoController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){
    $http.get('/cursos').success(function(data){
        $scope.cursos = data;
    });
    $http.get('/personal').success(function(data){
        $scope.maestros = data;
    });
    $scope.initCurso = function(){
        var data = {
            inicio: $scope.inicio,
            fin: $scope.fin,
            curso: $scope.curso,
            mtr: $scope.maestro
        };
    $http.post('/curso_init', data).success(function(data, status){
            if(status===200){
               $window.alert('Curso iniciado con éxito');
               $scope.goBack();
            } else {
                $window.alert('Error al iniciar curso');
            }
        });
    };
    $scope.goBack = function(){
        //$location.path('/init');
    };
}])
.controller('initDiplomadoController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){
    $http.get('/diplomados').success(function(data){
        $scope.diplomados = data;
    });
    $http.get('/personal').success(function(data){
        $scope.maestrosT = data;
        $scope.maestrosP = data;
    });
    $scope.initDiplomado = function(){
        var data = {
            inicio: $scope.inicio,
            fin: $scope.fin,
            diplomado: $scope.diplomado,
            mtr_teoria: $scope.maestroT,
            mtr_practica: $scope.maestroP
        };
    $http.post('/diplomado_init', data).success(function(data, status){
            if(status===200){
               $window.alert('Diplomado iniciado con éxito');
               $scope.goBack();
            } else {
                $window.alert('Error al iniciar Diplomado');
            }
        });
    };
    $scope.goBack = function(){
        //$location.path('/init');
    };
}])
.controller('initTallerDHController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){
    $http.get('/talleresDH').success(function(data){
        $scope.talleres = data;
    });
    $http.get('/personal').success(function(data){
        $scope.maestros = data;
    });
    $scope.initTallerDH = function(){
        var data = {
            inicio: $scope.inicio,
            fin: $scope.fin,
            taller: $scope.tallerDH,
            mtr: $scope.maestro
        };
    $http.post('/tallerDH_init', data).success(function(data, status){
            if(status===200){
               $window.alert('Taller iniciado con éxito');
               $scope.goBack();
            } else {
                $window.alert('Error al iniciar Taller');
            }
        });
    };
    $scope.goBack = function(){
        //$location.path('/init');
    };
}])
.controller('initTallerFSController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){
    $http.get('/talleresFS').success(function(data){
        $scope.talleres = data;
    });
    $http.get('/personal').success(function(data){
        $scope.maestros = data;
    });
    $scope.initTallerFS = function(){
        var data = {
            inicio: $scope.inicio,
            fin: $scope.fin,
            taller: $scope.tallerFS,
            mtr: $scope.maestro
        };
    $http.post('/tallerFS_init', data).success(function(data, status){
            if(status===200){
               $window.alert('Taller iniciado con éxito');
               $scope.goBack();
            } else {
                $window.alert('Error al iniciar Taller');
            }
        });
    };
    $scope.goBack = function(){
        //$location.path('/init');
    };
}]);