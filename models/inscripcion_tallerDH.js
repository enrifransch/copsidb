module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_tallerDH', {
        fecha: {
            type: DataTypes.DATE
        }
    });
};