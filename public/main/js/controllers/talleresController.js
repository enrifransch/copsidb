angular.module('copsiApp')
.controller('talleresDHController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/talleresDH').success(function(data){
        $scope.talleres = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getTaller = function(req){
        $location.path('/talleresDH/' + req.id);
    };
}])
.controller('talleresDHIndividualController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('talleresDH/'+$routeParams.id).success(function(data){
        $scope.tallerDH= data;
    });
    $scope.editarTallerDH= function(){
        $location.path('/talleresDH/editar/' + $routeParams.id);
    }
}])
.controller('talleresDHEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('talleresDH/'+$routeParams.id).success(function(data){
        $scope.taller= data;
    });
    $scope.updateTallerDH= function(){
        var data = {
            nombre: $scope.taller.nombre,
            costo: $scope.taller.costo
        };
        $http.put('/talleresDH/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $window.alert('Actualizado con éxito');
                location.path('talleresDH/');
            } else {
                $window.alert('Error al actualizar');
            }
        }, function(er){
            $window.alert('Error al actualizar');
            console.log(er);
        });
    };  
    $scope.goBack = function(){
        $location.path('/talleresDH/'+$routeParams.id);
    };
}])
.controller('talleresDHAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addTallerDH= function(){
        var data = {
            nombre: $scope.nombre,
            costo: $scope.costo
        };  
        $http.post('/talleresDH', data).success(function(data, status){
            if(status===200){
                $window.alert('Taller creado con éxito');
            } else {
                $window.alert('Error al crear taller');
            }
        });
    };
}])
.controller('talleresFSController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/talleresFS').success(function(data){
        $scope.talleres = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getTaller = function(req){
        $location.path('/talleresFS/' + req.id);
    };
}])
.controller('talleresFSIndividualController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('talleresFS/'+$routeParams.id).success(function(data){
        $scope.tallerFS= data;
    });
    $scope.editarTallerFS= function(){
        $location.path('/talleresFS/editar/' + $routeParams.id);
    }
}])
.controller('talleresFSEditarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $http.get('talleresFS/'+$routeParams.id).success(function(data){
        $scope.taller= data;
    });
    $scope.updateTallerFS= function(){
        var data = {
            nombre: $scope.taller.nombre,
            costo: $scope.taller.costo
        };
        $http.put('/talleresFS/edit/'+$routeParams.id, data).success(function(data, status){
            if(status===200){
                $window.alert('Actualizado con éxito');
                location.path('talleresFS/');
            } else {
                $window.alert('Error al actualizar');
            }
        }, function(er){
            $window.alert('Error al actualizar');
            console.log(er);
        });
    };  
    $scope.goBack = function(){
        $location.path('/talleresFS/'+$routeParams.id);
    };
}])
.controller('talleresFSAgregarController', ['$scope', '$http', '$routeParams', '$location', '$window', function($scope, $http, $routeParams, $location, $window){
    $scope.addTallerFS= function(){
        var data = {
            nombre: $scope.nombre,
            costo: $scope.costo
        };  
        $http.post('/talleresFS', data).success(function(data, status){
            if(status===200){
                $window.alert('Taller creado con éxito');
            } else {
                $window.alert('Error al crear taller');
            }
        });
    };
}]);