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
  res.sendFile('landing.html', {root: __dirname + '/public/main/'});
});

app.get('/forbidden', function(req, res){
  res.sendFile('forbidden.html', {root: __dirname + '/public/authorization'});
});

/*
app.get('/main', function(req, res){
  res.sendFile('landing.html', {root: __dirname + '/public/main/'});
});
*/

//GET Methods
app.get('/alumnos', function(req, res){
  db.alumno.findAll().then(function(alumnos) {
    res.json(alumnos);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/alumnos/:id', function(req, res){
  var alumnoId = parseInt(req.params.id, 10);
  db.alumno.findOne({
      where:{
        id: alumnoId
      }
    }).then(function(alumno){
        if(!!alumno){
          res.json(alumno.toJSON());
        } else {
          res.status(404).send();
        }
      }, function(er){
        res.status(500).send();
      });
   });

app.get('/personal', function(req, res){
  db.personal.findAll().then(function(personal) {
    res.json(personal);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/personal/:id', function(req, res){
  var personalId = parseInt(req.params.id, 10);
  db.personal.findOne({
      where:{
        id: personalId
      }
    }).then(function(personal){
        if(!!personal){
          res.json(personal.toJSON());
        } else {
          res.status(404).send();
        }
      }, function(er){
        res.status(500).send();
      });
   });

app.get('/cursos', function(req, res){
  db.curso.findAll().then(function(curso) {
    res.json(curso);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/cursos/:id', function(req, res){
  var cursoId = parseInt(req.params.id, 10);
  db.curso.findOne({
      where:{
        id: cursoId
      }
    }).then(function(curso){
        if(!!curso){
          res.json(curso.toJSON());
        } else {
          res.status(404).send();
        }
      }, function(er){
        res.status(500).send();
      });
   });

app.get('/diplomados', function(req, res){
  db.diplomado.findAll().then(function(diplomado) {
    res.json(diplomado);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/diplomados/:id', function(req, res){
  var diplomadoId = parseInt(req.params.id, 10);
  db.diplomado.findOne({
      where:{
        id: diplomadoId
      }
    }).then(function(diplomado){
        if(!!diplomado){
          res.json(diplomado.toJSON());
        } else {
          res.status(404).send();
        }
      }, function(er){
        res.status(500).send();
      });
   });

app.get('/libros', function(req, res){
  db.libro.findAll().then(function(libro) {
    res.json(libro);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/libros/:id', function(req, res){
  var libroId = parseInt(req.params.id, 10);
  db.libro.findOne({
    where:{
      id: libroId
    }
  }).then(function(libro){
    if(!!libro){
      res.json(libro.toJSON());
    } else {
      res.status(404).send();
    }
  }, function(er){
    res.status(500).send();
  });
});

app.get('/talleresDH', function(req, res){
  db.tallerDH.findAll().then(function(tallerDH) {
    res.json(tallerDH);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/talleresDH/:id', function(req, res){
  var tallerDHId = parseInt(req.params.id, 10);
  db.tallerDH.findOne({
    where:{
      id: tallerDHId
    }
  }).then(function(tallerDH){
    if(!!tallerDH){
      res.json(tallerDH.toJSON());
    } else {
      res.status(404).send();
    }
  }, function(er){
    res.status(500).send();
  });
});

app.get('/talleresFS', function(req, res){
  db.tallerFS.findAll().then(function(tallerFS) {
    res.json(tallerFS);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/talleresFS/:id', function(req, res){
  var tallerFSId = parseInt(req.params.id, 10);
  db.tallerFS.findOne({
    where:{
      id: tallerFSId
    }
  }).then(function(tallerFS){
    if(!!tallerFS){
      res.json(tallerFS.toJSON());
    } else {
      res.status(404).send();
    }
  }, function(er){
    res.status(500).send();
  });
});

app.get('/inventario', function(req, res){
  db.inventario.findAll().then(function(inventario) {
    res.json(inventario);
  }, function(er){
    res.status(500).send();
    console.log(er);
  });
});

app.get('/inventario/:id', function(req, res){
  var inventarioId = parseInt(req.params.id, 10);
  db.inventario.findOne({
    where:{
      id: inventarioId
    }
  }).then(function(inventario){
    if(!!inventario){
      res.json(inventario.toJSON());
    } else {
      res.status(404).send();
    }
  }, function(er){
    res.status(500).send();
  });
});

//POST Methods
app.post('/alumnos', function(req, res){
  var body = _.pick(req.body, 'nombre', 'apellidos', 'direccion', 'email', 'celular', 'telefono', 'fechaNac', 'sexo', 'escolaridad', 'referencias', 'hrsTerapia', 'cuota');
  db.alumno.create(body).then(function(alumno){
    res.json(alumno.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/personal', function(req, res){
  var body = _.pick(req.body, 'nombre', 'apellidos', 'puesto', 'direccion', 'email', 'celular', 'telefono', 'fechaNac', 'sexo', 'escolaridad', 'referencias', 'hrsTerapia', 'cuota');
  db.personal.create(body).then(function(personal){
    res.json(personal.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/cursos', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  db.curso.create(body).then(function(curso){
    res.json(curso.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/diplomados', function(req, res){
  var body = _.pick(req.body, 'nombre', 'aval', 'costo');
  db.diplomado.create(body).then(function(diplomado){
    res.json(diplomado.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/talleresDH', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  db.tallerDH.create(body).then(function(tallerDH){
    res.json(tallerDH.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/talleresFS', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  db.tallerFS.create(body).then(function(tallerFS){
    res.json(tallerFS.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/inventario', function(req, res){
  var body = _.pick(req.body, 'nombre', 'cantidad', 'tipo', 'comentarios');
  db.inventario.create(body).then(function(inventario){
    res.json(inventario.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/libros', function(req, res){
  var body = _.pick(req.body, 'isbn', 'titulo', 'autores', 'editorial', 'genero', 'nPags', 'existencia', 'comentarios');
  db.libro.create(body).then(function(libro){
    res.json(libro.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.post('/users', function (req, res) {
	var body = _.pick(req.body, 'username', 'password');
	db.user.create(body).then(function (user) {
		res.json(user.toPublicJSON());
	}, function (e) {
		res.status(400).json(e);
	});
});

app.post('/users/login', function (req, res) {
	var body = _.pick(req.body, 'username', 'password');
	var userInstance;
	db.user.authenticate(body).then(function (user) {
		var token = user.generateToken('authentication');
		userInstance = user;
		return db.token.create({
			token: token
		});
	}).then(function(tokenInstance){
		res.header('Auth', tokenInstance.get('token')).json(userInstance.toPublicJSON());
	}).catch(function () {
		res.status(401).send();
	});
});

//PUT Methods

app.put('/alumnos/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'apellidos', 'direccion', 'email', 'celular', 'telefono', 'fechaNac', 'sexo', 'escolaridad', 'referencias', 'hrsTerapia', 'cuota');
  var alumnoId = parseInt(req.params.id, 10);
  db.alumno.update(body, {
    where: {
      id: alumnoId
    }
  }).then(function(alumno){
    res.json(alumno.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/personal/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'apellidos', 'puesto', 'direccion', 'email', 'celular', 'telefono', 'fechaNac', 'sexo', 'escolaridad', 'referencias', 'hrsTerapia', 'cuota');
  var personalId = parseInt(req.params.id, 10);
  db.personal.update(body, {
    where: {
      id: personalId
    }
  }).then(function(personal){
    res.json(personal.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/cursos/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  var cursoId = parseInt(req.params.id, 10);
  db.curso.update(body, {
    where: {
      id: cursoId
    }
  }).then(function(curso){
    res.json(curso.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/diplomados/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'aval', 'costo');
  var diplomadoId = parseInt(req.params.id, 10);
  db.diplomado.update(body, {
    where: {
      id: diplomadoId
    }
  }).then(function(diplomado){
    res.json(diplomado.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/talleresDH/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  var tallerId = parseInt(req.params.id, 10);
  db.tallerDH.update(body, {
    where: {
      id: tallerId
    }
  }).then(function(taller){
    res.json(taller.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/talleresFS/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'costo');
  var tallerId = parseInt(req.params.id, 10);
  db.tallerFS.update(body, {
    where: {
      id: tallerId
    }
  }).then(function(taller){
    res.json(taller.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/inventario/edit/:id', function(req, res){
  var body = _.pick(req.body, 'nombre', 'cantidad', 'tipo', 'comentarios');
  var inventarioId = parseInt(req.params.id, 10);
  db.inventario.update(body, {
    where: {
      id: inventarioId
    }
  }).then(function(inventario){
    res.json(inventario.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

app.put('/biblioteca/edit/:id', function(req, res){
  var body = _.pick(req.body, 'isbn', 'titulo', 'autores', 'editorial', 'genero', 'nPags', 'existencia', 'comentarios');
  var libroId = parseInt(req.params.id, 10);
  db.libro.update(body, {
    where: {
      id: libroId
    }
  }).then(function(libro){
    res.json(libro.toJSON);
  }, function(err){
    res.status(400).json(err);
  });
});

//DELETE Methods
app.delete('/users/login', /*middleware.requireAuthentication,*/ function(req, res){
	req.token.destroy().then(function() {
		res.status(204).send();
	}).catch(function (){
		res.status(500).send();
	});
});

app.delete('/alumno/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.alumno.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/libro/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.libro.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/curso/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.curso.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/diplomado/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.diplomado.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/inventario/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.inventario.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/personal/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.personal.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/tallerDH/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.tallerDH.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

app.delete('/tallerFS/:id', function(req, res){
  var ID = parseInt(req.params.id, 10);
  db.tallerFS.destroy({
    where: {
      id: ID
    }
  }).then(function(){
    res.status(204).send();
  }).catch(function(){
    res.status(500).send();
  });
});

//Loads the DB, force: true drops everything
db.sequelize.sync({/*force: true*/}).then(function(){
  
});

module.exports = app;
