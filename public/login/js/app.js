'use strict';

var myApp = angular.module('copsiLogin', []);
var auth_token = null;

myApp.controller('loginController', ['$scope', '$http', '$window', function(scope, http, window){

    scope.username = '';
	scope.password = '';

    scope.attemptLogin = function(username, password){

        var User = {

            username: username,
            password: password
        }

        http({
            method: 'POST',
            url: 'users/login',
            data: User
        }).then(function(res){
            //auth_token = res.headers('Auth');
            window.location.href='/';
        }).catch(function(err){
            console.log(err);
        });
    }
}]);