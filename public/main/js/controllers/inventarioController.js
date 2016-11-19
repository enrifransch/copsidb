angular.module('copsiApp')
.controller('inventarioController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/inventario').success(function(data){
        $scope.inventario = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getInventario = function(req){
        $location.path('/inventario/' + req.id);
    };
}])
.controller('inventarioIndividualController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('inventario/'+$routeParams.id).success(function(data){
        $scope.inventario = data;
    });
    $scope.editarInventario = function(){
        $location.path('/inventario/editar/' + $routeParams.id);
    };
    $scope.eliminarInventario = function(){
        del = $window.confirm('¿Seguro que desea eliminar este objeto?');
        if(del){
            $http.delete('inventario/'+$routeParams.id).success(function(data){
                $window.alert("Eliminado con exito");
                $scope.goBack();
            });
        }
    };
    $scope.goBack = function(){
        $location.path('/inventario');
    };
}])
.controller('inventarioEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('inventario/'+$routeParams.id).success(function(data){
        $scope.inventario = data;
    });
    $scope.updateInventario = function(){
        var data = {
            nombre: $scope.inventario.nombre,
            cantidad: $scope.inventario.cantidad,
            tipo: $scope.inventario.tipo,
            comentarios: $scope.inventario.comentarios
        };
        $http.put('/inventario/edit/'+$routeParams.id, data).success(function(data, status){
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
        $location.path('/inventario/'+$routeParams.id);
    };
}])
.controller('inventarioAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addInventario = function(){
        var data = {
            nombre: $scope.nombre,
            cantidad: $scope.cantidad,
            tipo: $scope.tipo,
            comentarios: $scope.comentarios
        };  
        $http.post('/inventario', data).success(function(data, status){
            if(status===200){
                $window.alert('Objeto creado con éxito');
                $scope.goBack();
            } else {
                $window.alert('Error al crear objeto');
            }
        });
    };
    $scope.goBack = function(){
        $location.path('/inventario');
    };
}]);