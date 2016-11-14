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
    };
}])
.controller('alumnosIndividualController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('alumnos/'+$routeParams.id).success(function(data){
        $scope.alumno = data;
    });
    $scope.editarAlumno = function(){
        $location.path('/alumnos/editar/' + $routeParams.id);
    }
}])
.controller('alumnosEditarController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('alumnos/'+$routeParams.id).success(function(data){
        $scope.alumno = data;
    });
    $scope.updateAlumno = function(){
        var data = {
            nombre: $scope.nombre,
            apellidos: $scope.alumno.apellidos,
            direccion: $scope.alumno.direccion,
            email: $scope.alumno.email,
            celular: $scope.alumno.celular,
            telefono: $scope.alumno.telefono,
            fechaNac: $scope.alumno.fechaNac,
            sexo: $scope.alumno.sexo,
            escolaridad: $scope.alumno.escolaridad,
            referencias: $scope.alumno.referencias,
            hrsTerapia: $scope.alumno.hrsTerapia,
            cuota: $scope.alumno.cuota
        };
        $http.put('/alumnos/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $scope.message = 'Alumno actualizado con éxito';
                $location.path('alumnos/');
            } else {
                $scope.message = 'Error al actualizar alumno';
            }
        });
    };  
    $scope.goBack = function(){
        $location.path('/alumnos/'+$routeParams.id);
    } 
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
            if(status===200){
                $scope.message = 'Alumno creado con éxito';
            } else {
                $scope.message = 'Error al crear alumno';
            }
        });
    };
}]);