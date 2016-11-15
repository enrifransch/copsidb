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
}]).controller('talleresFSController', ['$scope', '$http', '$location', function($scope, $http, $location){
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
}]);