module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_tallerFS', {
        id_cal_tallerFS: {
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