module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_diplomado', {
        id_inscipcion_diplomado: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        fecha: {
            type: DataTypes.DATE
        }
    });
};