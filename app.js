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

//GET Methods
app.get('/alumnos', function(req, res){
  db.alumno.findAll().then(function(alumnos) {
    res.json(alumnos);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

//Loads the DB, force: true drops everything
db.sequelize.sync({/*force: true*/}).then(function(){
  /*return db.alumno.create({
    nombre: 'lalitros',
    apellidos: 'castilla',
    direccion: 'valle del carmen',
    email: 'joud',
    celular: '555555',
    telefono: '555555',
    fechaNac: '1992-09-12',
    sexo: 'femenino',
    escolaridad: 'nula',
    hrsTerapia: 10,
    cuota: 1000
  });*/
});

module.exports = app;
