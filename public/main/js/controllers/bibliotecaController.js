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
        $location.path('/libros/' + req.id);
    };
}]);