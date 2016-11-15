angular.module('copsiApp')
.controller('inventarioController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/inventario').success(function(data){
        $scope.inventario = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getAlumno = function(req){
        $location.path('/inventario/' + req.id);
    };
}]);