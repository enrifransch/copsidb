module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_curso', {
        fecha: {
            type: DataTypes.DATE
        }
    });
};