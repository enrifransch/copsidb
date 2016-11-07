'use strict';

var myApp = angular.module('copsiLogin', []);

myApp.controller('loginController', ['$scope', '$http', '$window', function(scope, http, window){

    scope.username = '';
	scope.password = '';

    scope.attemptLogin = function(username, password){

        var User = {

            username: username,
            password: password
        }

        if(username === 'copsi' && password === 'copsi'){

           window.location.href = '/main';
        }

        console.log(username + password);
    }
}]);