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
}]);