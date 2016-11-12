module.exports = function (sequelize, DataTypes){
    return sequelize.define('inscripcion_curso', {
        id_inscipcion_curso: {
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