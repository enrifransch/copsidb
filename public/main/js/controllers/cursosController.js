angular.module('copsiApp')
.controller('cursosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/cursos').success(function(data){
        $scope.cursos = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getCurso = function(req){
        $location.path('/cursos/' + req.id);
    };
}])
.controller('cursosIndividualController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('cursos/'+$routeParams.id).success(function(data){
        $scope.curso = data;
    });
    $scope.editarCurso = function(){
        $location.path('/cursos/editar/' + $routeParams.id);
    }
}])
.controller('cursosEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('cursos/'+$routeParams.id).success(function(data){
        $scope.curso = data;
    });
    $scope.updateCurso = function(){
        var data = {
            nombre: $scope.curso.nombre,
            costo: $scope.curso.costo
        };
        $http.put('/cursos/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $window.alert('Actualizado con éxito');
                location.path('cursos/');
            } else {
                $window.alert('Error al actualizar');
            }
        }, function(er){
            $window.alert('Error al actualizar');
            console.log(er);
        });
    };  
    $scope.goBack = function(){
        $location.path('/cursos/'+$routeParams.id);
    };
}])
.controller('cursosAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addCurso = function(){
        var data = {
            nombre: $scope.nombre,
            costo: $scope.costo
        };  
        $http.post('/cursos', data).success(function(data, status){
            if(status===200){
                $window.alert('Curso creado con éxito');
            } else {
                $window.alert('Error al crear curso');
            }
        });
    };
}]);