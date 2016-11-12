angular.module('copsiApp')
.controller('alumnosController', ['$scope', '$http', function($scope, $http){
    $http.get('/alumnos').success(function(data){
        $scope.alumnos = data;
    });
}]);