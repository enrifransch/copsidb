angular.module('copsiApp')
.controller('personalController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/personal').success(function(data){
        $scope.personal = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getPersonal = function(req){
        $location.path('/personal/' + req.id);
    };
}])
.controller('personalIndividualController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('personal/'+$routeParams.id).success(function(data){
        $scope.personal = data;
    });
    $scope.editarPersonal = function(){
        $location.path('/personal/editar/' + $routeParams.id);
    };
    $scope.eliminarPersonal = function(){
        del = $window.confirm('¿Seguro que desea eliminar a esta persona?');
        if(del){
            $http.delete('personal/'+$routeParams.id).success(function(data){
                $window.alert("Eliminado con exito");
                $scope.goBack();
            });
        }
    };
    $scope.goBack = function(){
        $location.path('/personal');
    };
}])
.controller('personalEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('personal/'+$routeParams.id).success(function(data){
        $scope.personal = data;
    });
    $scope.updatePersonal = function(){
        var data = {
            nombre: $scope.personal.nombre,
            apellidos: $scope.personal.apellidos,
            puesto: $scope.personal.puesto,
            direccion: $scope.personal.direccion,
            email: $scope.personal.email,
            celular: $scope.personal.celular,
            telefono: $scope.personal.telefono,
            fechaNac: $scope.personal.fechaNac,
            sexo: $scope.personal.sexo,
            escolaridad: $scope.personal.escolaridad,
            referencias: $scope.personal.referencias,
            hrsTerapia: $scope.personal.hrsTerapia,
            cuota: $scope.personal.cuota
        };
        $http.put('/personal/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $window.alert('Actualizado con éxito');
                $scope.goBack();
            } else {
                $window.alert('Error al actualizar');
            }
        });
    };  
    $scope.goBack = function(){
        $location.path('/personal/'+$routeParams.id);
    };
}])
.controller('personalAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addPersonal = function(){
        var data = {
            nombre: $scope.nombre,
            apellidos: $scope.apellidos,
            puesto: $scope.puesto,
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
        $http.post('/personal', data).success(function(data, status){
            if(status===200){
                $window.alert('Creado con éxito');
                $scope.goBack();
            } else {
                $window.alert('Error al crear');
            }
        });
    };
    $scope.goBack = function(){
        $location.path('/personal');
    };
}]);