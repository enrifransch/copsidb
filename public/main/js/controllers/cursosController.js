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
.controller('cursosIndividualController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('cursos/'+$routeParams.id).success(function(data){
        $scope.curso = data;
    });
    $scope.editarCurso = function(){
        $location.path('/cursos/editar/' + $routeParams.id);
    };
    $scope.eliminarCurso = function(){
        del = $window.confirm('¿Seguro que desea eliminar a este curso?');
        if(del){
            $http.delete('curso/'+$routeParams.id).success(function(data){
                $window.alert("Eliminado con exito");
                $scope.goBack();
            });
        }
    };
    $scope.goBack = function(){
        $location.path('/cursos');
    };
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
                $scope.goBack();
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
                $scope.goBack();
            } else {
                $window.alert('Error al crear curso');
            }
        });
    };
    $scope.goBack = function(){
        $location.path('/cursos');
    };
}]);