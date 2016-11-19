angular.module('copsiApp')
.controller('bibliotecaController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/libros').success(function(data){
        $scope.libros = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getLibro = function(req){
        $location.path('/biblioteca/' + req.id);
    };
}])
.controller('bibliotecaIndividualController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('libros/'+$routeParams.id).success(function(data){
        $scope.libro = data;
    });
    $scope.editarLibro = function(){
        $location.path('/biblioteca/editar/' + $routeParams.id);
    }
}])
.controller('bibliotecaEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('libros/'+$routeParams.id).success(function(data){
        $scope.libro = data;
    });
    $scope.updateLibro = function(){
        var data = {
            isbn: $scope.libro.isbn,
            titulo: $scope.libro.titulo,
            autores: $scope.libro.autores,
            editorial: $scope.libro.editorial,
            genero: $scope.libro.genero,
            nPags: $scope.libro.nPags,
            existencia: $scope.libro.existencia,
            comentarios: $scope.libro.comentarios
        };
        $http.put('/biblioteca/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $window.alert('Actualizado con éxito');
                location.path('biblioteca/');
            } else {
                $window.alert('Error al actualizar');
            }
        }, function(er){
            $window.alert('Error al actualizar');
            console.log(er);
        });
    };  
    $scope.goBack = function(){
        $location.path('/biblioteca/'+$routeParams.id);
    };
}])
.controller('bibliotecaAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window',function($scope, $http, $routeParams, $location, $window){
    $scope.addLibro = function(){
        var data = {
            isbn: $scope.isbn,
            titulo: $scope.titulo,
            autores: $scope.autores,
            editorial: $scope.editorial,
            genero: $scope.genero,
            nPags: $scope.nPags,
            existencia: $scope.existencia,
            comentarios: $scope.comentarios
        };
        $http.post('/libros', data).success(function(data, status){
            if(status===200){
               $window.alert('Libro creado con éxito');
            } else {
                $window.alert('Error al crear libro');
            }
        });
    };
}]);