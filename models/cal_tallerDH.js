module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_tallerDH', {
        id_cal_tallerDH: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        calificacion: {
            type: DataTypes.INTEGER
        },
        notas: {
            type: DataTypes.TEXT
        }
    });
};