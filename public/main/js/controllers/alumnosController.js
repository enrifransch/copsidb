angular.module('copsiApp')
.controller('alumnosController', ['$scope', '$http', function($scope, $http){
    $scope.filteredAlumnos = [],
    $scope.alumnos = [],
    $scope.currentPage = 1,
    $scope.numPerPage = 10,
    $scope.maxSize = 5,
    $http.get('/alumnos').success(function(data){
        $scope.alumnos = data;
    });
    /*console.log(data);
    $scope.$watch('currentPage + numPerPage', function(){
        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
        end = begin + $scope.numPerPage;
        $scope.filteredAlumnos = data.slice(begin, end);
    });*/
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }
}]);