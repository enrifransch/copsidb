module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_tallerFS', {
        fecha: {
            type: DataTypes.DATE
        }
    });
};