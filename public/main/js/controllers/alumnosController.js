angular.module('copsiApp')
.controller('alumnosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $http.get('/alumnos').success(function(data){
        $scope.alumnos = data;
        $scope.totalItems = data.length;

    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getAlumno = function(req){
        $location.path('/alumnos/' + req.id);
    }
}])

.controller('alumnosIndividualController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('alumnos/'+$routeParams.id).success(function(data){
        $scope.alumno = data;
    })
}])

.controller('alumnosAgregarController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $scope.addAlumno = function(){
        var data = {
            nombre: $scope.nombre,
            apellidos: $scope.apellidos,
            direccion: $scope.direccion,
            email: $scope.email,
            celular: $scope.celular,
            telefono: $scope.telefono,
            fechaNac: $scope.fechaNac,
            sexo: $scope.sexo,
            escolaridad: $scope.escolaridad,
            referencias: $scope.referencias,
            hrsTerapia: $scope.hrsTerapia,
            cuota: $scope.cuota
        };  
        $http.post('/alumnos', data).success(function(data, status){
            
        });
    }
}]);