angular.module('copsiApp')
.controller('cursosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/cursos').success(function(data){
        $scope.cursos = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getCurso = function(req){
        $location.path('/cursos/' + req.id);
    };
}]);