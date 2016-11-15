angular.module('copsiApp')
.controller('diplomadosController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/diplomados').success(function(data){
        $scope.diplomados = data;
    });
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.getDiplomado = function(req){
        $location.path('/diplomados/' + req.id);
    };
}]);