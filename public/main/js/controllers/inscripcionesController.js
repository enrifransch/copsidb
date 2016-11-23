angular.module('copsiApp')
.controller('insCursoController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/cursos_init').success(function(data){
        $scope.cursos = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getCurso = function(req){
        $location.path('/inscripciones/cursos/' + req.cid);
    };
}])
.controller('insDiplomadoController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/diplomados_init').success(function(data){
        $scope.diplomados = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getDiplomado = function(req){
        $location.path('/alumnos/' + req.id);
    };
}])
.controller('insCursoIndController', ['$scope', '$http', '$location', '$routeParams', '$window',function($scope, $http, $location, $routeParams, $window){
    $http.get('/cursos_init/'+$routeParams.id).success(function(data){
        $scope.alumnos = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $http.get('/alumnos').success(function(data){
        $scope.nalumnos = data;
    });
    $scope.addAlumno = function(req){
        var data ={
            alumno: $scope.nalumno,
            curso_init: $routeParams.id
        };
        $http.post('/cursos_init', data).success(function(data, status){
            if(status===200){
               $window.alert('Alumno inscrito con éxito');
               $http.get('/cursos_init/'+$routeParams.id).success(function(data){
                    $scope.alumnos = data;
                });
            } else {
                $window.alert('Error al inscribir alumno');
            }
        });
    };
}]);