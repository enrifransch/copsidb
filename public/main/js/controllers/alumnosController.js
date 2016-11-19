angular.module('copsiApp')
.controller('alumnosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/alumnos').success(function(data){
        $scope.alumnos = data;
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
    };
}])
.controller('alumnosEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('alumnos/'+$routeParams.id).success(function(data){
        $scope.alumno = data;
    });
    $scope.updateAlumno = function(){
        var data = {
            nombre: $scope.alumno.nombre,
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
                $window.alert('Alumno actualizado con éxito');
                $location.path('alumnos/');
            } else {
                $window.alert('Error al actualizar alumno');
            }
        });
    };  
    $scope.goBack = function(){
        $location.path('/alumnos/'+$routeParams.id);
    } 
}])
.controller('alumnosAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
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
                $window.alert('Alumno creado con éxito');
            } else {
                $window.alert('Alumno creado con éxito');
            }
        });
    };
}]);