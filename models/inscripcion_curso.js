module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_curso', {
        fecha: {
            type: DataTypes.DATE
        },
        alumno:{
            type: DataTypes.INTEGER
        },
        curso_init:{
            type: DataTypes.INTEGER
        }
    });
};