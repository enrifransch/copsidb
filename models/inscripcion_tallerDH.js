module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_tallerDH', {
        id_inscipcion_tallerDH: {
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