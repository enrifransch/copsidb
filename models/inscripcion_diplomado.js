module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_diplomado', {
        fecha: {
            type: DataTypes.DATE
        }
    });
};