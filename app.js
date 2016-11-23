var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var _ = require('underscore');
//var middleware = require('./middleware.js')(db);
var bcrypt = require('bcryptjs');
var db = require('./db.js');
var sqlite3 = require('sqlite3');
var dbc = new sqlite3.Database('./data/dev-copsidb.sqlite');

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

app.get('/diplomados_init', function(req, res){
  dbc.all('select diplomado_inits.id, inicio, fin, d.nombre as diplomado, p1.id as id_p1, (p1.nombre || " " || p1.apellidos) as mtrT, p2.id as id_p2, (p2.nombre || " " || p2.apellidos) '
  + 'as mtrP from diplomado_inits inner join personals as p1 on diplomado_inits.mtr_teoria = p1.id inner join personals as p2 on diplomado_inits.mtr_practica = p2.id '
  +  'inner join diplomados as d on diplomado_inits.diplomado = d.id;', 
  function(err, rows){
    if(err){
      console.log('error', err);
      res.status(400).json(err);
      //dbc.close();
    }
    else{
      res.json(rows);
      //dbc.close();
    }
  });
});

app.get('/cursos_init', function(req, res){
  dbc.all('select curso_inits.id, inicio, fin, c.nombre as curso, p1.id as id_p1, (p1.nombre || " " || p1.apellidos) as mtrT, c.id as cid '+
            'from curso_inits '+
            'inner join personals as p1 on curso_inits.mtr = p1.id '+
            'inner join cursos as c on curso_inits.curso = c.id;', 
  function(err, rows){
    if(err){
      console.log('error', err);
      res.status(400).json(err);
      //dbc.close();
    }
    else{
      //console.log(rows);
      res.json(rows);
      //dbc.close();
    }
  });
});

app.get('/cursos_init/:id', function(req, res){
  var cursoId = parseInt(req.params.id, 10);
  dbc.all('select i.id, i.fecha, i.alumno as id_a, (a.nombre || " " || a.apellidos) as alumno '+
            'from inscripcion_cursos as i '+
            'inner join alumnos as a on a.id = i.alumno '+
            'where i.curso_init ='+cursoId+';', 
  function(err, rows){
    if(err){
      console.log('error', err);
      res.status(400).json(err);
      //dbc.close();
    }
    else{
      //console.log(rows);
      res.json(rows);
      //dbc.close();
    }
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

app.post('/curso_init', function (req, res) {
	var body = _.pick(req.body, 'inicio', 'fin', 'curso', 'mtr');
  db.curso_init.create({
    inicio: body.inicio,
    fin: body.fin
  }).then(function (obj) {
    obj.setDataValue('curso', body.curso);
    obj.setDataValue('mtr', body.mtr);
    obj.save(validate=true);
    res.json(obj.toJSON);
	}, function (e) {
		res.status(400).json(e);
	});
});

app.post('/diplomado_init', function (req, res) {
	var body = _.pick(req.body, 'inicio', 'fin', 'diplomado', 'mtr_teoria', 'mtr_practica');
  db.diplomado_init.create({
    inicio: body.inicio,
    fin: body.fin
  }).then(function (obj) {
    obj.setDataValue('diplomado', body.diplomado);
    obj.setDataValue('mtr_teoria', body.mtr_teoria);
    obj.setDataValue('mtr_practica', body.mtr_practica);
    obj.save(validate=true);
    res.json(obj.toJSON);
	}, function (e) {
		res.status(400).json(e);
	});
});

app.post('/tallerDH_init', function (req, res) {
	var body = _.pick(req.body, 'inicio', 'fin', 'taller', 'mtr');
  db.tallerDH_init.create({
    inicio: body.inicio,
    fin: body.fin
  }).then(function (obj) {
    obj.setDataValue('tallerDH', body.taller);
    obj.setDataValue('mtr', body.mtr);
    obj.save(validate=true);
    res.json(obj.toJSON);
	}, function (e) {
		res.status(400).json(e);
	});
});

app.post('/tallerFS_init', function (req, res) {
	var body = _.pick(req.body, 'inicio', 'fin', 'taller', 'mtr');
  db.tallerFS_init.create({
    inicio: body.inicio,
    fin: body.fin
  }).then(function (obj) {
    obj.setDataValue('tallerFS', body.taller);
    obj.setDataValue('mtr', body.mtr);
    obj.save(validate=true);
    res.json(obj.toJSON);
	}, function (e) {
		res.status(400).json(e);
	});
});

app.post('/cursos_init', function (req, res) {
  //console.log(req.body);
	var body = _.pick(req.body, 'alumno', 'curso_init');
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10){ dd='0'+dd } 
  if(mm<10){ mm='0'+mm } 
  var today = yyyy+'-'+mm+'-'+dd;
  db.inscripcion_curso.create({
    fecha: today,
    alumno: body.alumno,
    curso_init: body.curso_init
  }).then(function (obj) {
    console.log(obj);
    /*obj.setDataValue('alumnoId', 1);
    obj.setDataValue('cursoInitId', 1);
    obj.save(validate=true);*/
    res.json(obj.toJSON);
	}, function (e) {
		res.status(400).json(e);
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
