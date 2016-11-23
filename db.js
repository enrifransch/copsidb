var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-copsidb.sqlite'
	});
}

var db = {};

db.user = sequelize.import(__dirname + '/models/user.js');
db.token = sequelize.import(__dirname + '/models/token.js');
db.alumno = sequelize.import(__dirname + '/models/alumno.js');
db.curso = sequelize.import(__dirname + '/models/curso.js');
db.cal_curso = sequelize.import(__dirname + '/models/cal_curso.js');
db.cal_diplomado = sequelize.import(__dirname + '/models/cal_diplomado.js');
db.cal_tallerDH = sequelize.import(__dirname + '/models/cal_tallerDH.js');
db.cal_tallerFS = sequelize.import(__dirname + '/models/cal_tallerFS.js');
db.curso_init = sequelize.import(__dirname + '/models/curso_init.js');
db.diplomado = sequelize.import(__dirname + '/models/diplomado.js');
db.diplomado_init = sequelize.import(__dirname + '/models/diplomado_init.js');
db.inscripcion_curso = sequelize.import(__dirname + '/models/inscripcion_curso.js');
db.inscripcion_diplomado = sequelize.import(__dirname + '/models/inscripcion_diplomado.js');
db.inscripcion_tallerDH = sequelize.import(__dirname + '/models/inscripcion_tallerDH.js');
db.inscripcion_tallerFS = sequelize.import(__dirname + '/models/inscripcion_tallerFS.js');
db.inventario = sequelize.import(__dirname + '/models/inventario.js');
db.libro = sequelize.import(__dirname + '/models/libro.js');
db.personal = sequelize.import(__dirname + '/models/personal.js');
db.tallerDH = sequelize.import(__dirname + '/models/tallerDH.js');
db.tallerFS = sequelize.import(__dirname + '/models/tallerFS.js');
db.tallerDH_init = sequelize.import(__dirname + '/models/tallerDH_init.js');
db.tallerFS_init = sequelize.import(__dirname + '/models/tallerFS_init.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Relationships
db.tallerDH.hasOne(db.tallerDH, {foreignKey: 'requisito'});
db.diplomado.hasOne(db.diplomado, {foreignKey: 'requisito'});

db.diplomado.hasOne(db.diplomado_init, {foreignKey: 'diplomado'});
db.personal.hasOne(db.diplomado_init, {foreignKey: 'mtr_teoria'});
db.personal.hasOne(db.diplomado_init, {foreignKey: 'mtr_practica'});

db.tallerDH.hasOne(db.tallerDH_init, {foreignKey: 'tallerDH'});
db.personal.hasOne(db.tallerDH_init, {foreignKey: 'mtr'});

db.tallerFS.hasOne(db.tallerFS_init, {foreignKey: 'tallerFS'});
db.personal.hasOne(db.tallerFS_init, {foreignKey: 'mtr'});

db.curso.hasOne(db.curso_init, {foreignKey: 'curso'});
db.personal.hasOne(db.curso_init, {foreignKey: 'mtr'});
/*
db.alumno.hasMany(db.inscripcion_curso, {as: 'alumno'});
db.curso_init.hasMany(db.inscripcion_curso, {as: 'curso_init'});

db.alumno.belongsTo(db.inscripcion_curso, {foreignKey: 'alumno', foreignKeyConstraint:true});
db.curso_init.belongsTo(db.inscripcion_curso, {foreignKey: 'curso_init', foreignKeyConstraint:true});

db.alumno.hasOne(db.inscripcion_diplomado, {foreignKey: 'alumno'});
db.diplomado.hasOne(db.inscripcion_diplomado, {foreignKey: 'diplomado_init'});

db.alumno.hasOne(db.inscripcion_tallerDH, {foreignKey: 'alumno'});
db.tallerDH_init.hasOne(db.inscripcion_tallerDH, {foreignKey: 'tallerDH_init'});

db.alumno.hasOne(db.inscripcion_tallerFS, {foreignKey: 'alumno'});
db.tallerFS_init.hasOne(db.inscripcion_tallerFS, {foreignKey: 'tallerFS_init'});

db.alumno.hasOne(db.inscripcion_curso, {foreignKey: 'alumno'});
db.curso_init.hasOne(db.inscripcion_curso, {foreignKey: 'curso_init'});
*/
db.diplomado_init.hasOne(db.cal_diplomado, {foreignKey: 'diplomado_init'});
db.alumno.hasOne(db.cal_diplomado, {foreignKey: 'alumno'});

db.curso_init.hasOne(db.cal_curso, {foreignKey: 'curso_init'});
db.alumno.hasOne(db.cal_curso, {foreignKey: 'alumno'});

db.tallerFS_init.hasOne(db.cal_tallerFS, {foreignKey: 'tallerFS_init'});
db.alumno.hasOne(db.cal_tallerFS, {foreignKey: 'alumno'});

db.tallerDH_init.hasOne(db.cal_tallerDH, {foreignKey: 'tallerDH_init'});
db.alumno.hasOne(db.cal_tallerDH, {foreignKey: 'alumno'});

module.exports = db;