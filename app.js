var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var _ = require('underscore');


var app = express();

var validUser = false;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  if(validUser){
    res.redirect('/main');
  }

  res.sendFile('login.html', {root: __dirname + '/public/login/'});

});

app.get('/main', function(req, res){

  res.sendFile('landing.html', {root: __dirname + '/public/main/'});
  
});

module.exports = app;
