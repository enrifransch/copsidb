var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var _ = require('underscore');
//var middleware = require('./middleware.js')(db);
var bcrypt = require('bcryptjs');
var db = require('./db.js');

var app = express();

var validuser = false;
var current_user;

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile('login.html', {root: __dirname + '/public/login/'});
});

app.get('/forbidden', function(req, res){

  res.sendFile('forbidden.html', {root: __dirname + '/public/authorization'});

});

app.get('/main', function(req, res){

  res.sendFile('landing.html', {root: __dirname + '/public/main/'});
  
});

module.exports = app;
