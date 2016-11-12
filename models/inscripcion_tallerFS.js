module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_tallerFS', {
        id_inscipcion_tallerFS: {
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