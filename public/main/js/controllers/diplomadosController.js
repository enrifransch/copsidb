angular.module('copsiApp')
.controller('diplomadosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/diplomados').success(function(data){
        $scope.diplomados = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getDiplomado = function(req){
        $location.path('/diplomados/' + req.id);
    };
}])
.controller('diplomadosIndividualController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('diplomados/'+$routeParams.id).success(function(data){
        $scope.diplomado = data;
    });
    $scope.editarDiplomado = function(){
        $location.path('/diplomados/editar/' + $routeParams.id);
    };
    $scope.eliminarDiplomado = function(){
        del = $window.confirm('¿Seguro que desea eliminar este diplomado?');
        if(del){
            $http.delete('diplomado/'+$routeParams.id).success(function(data){
                $window.alert("Eliminado con exito");
                $scope.goBack();
            });
        }
    };
    $scope.goBack = function(){
        $location.path('/diplomados');
    };
}])
.controller('diplomadosEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('diplomados/'+$routeParams.id).success(function(data){
        $scope.diplomado = data;
    });
    $scope.updateDiplomado = function(){
        var data = {
            nombre: $scope.diplomado.nombre,
            aval: $scope.diplomado.aval,
            costo: $scope.diplomado.costo
        };
        $http.put('/diplomados/edit/'+$routeParams.id, data).success(function(data, status){
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
        $location.path('/diplomados/'+$routeParams.id);
    };
}])
.controller('diplomadosAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addDiplomado = function(){
        var data = {
            nombre: $scope.nombre,
            aval: $scope.aval,
            costo: $scope.costo
        };  
        $http.post('/diplomados', data).success(function(data, status){
            if(status===200){
                $window.alert('Diplomado creado con éxito');
                $scope.goBack();
            } else {
                $window.alert('Error al crear Diplomado');
            }
        });
    };
    $scope.goBack = function(){
        $location.path('/diplomados');
    };
}]);