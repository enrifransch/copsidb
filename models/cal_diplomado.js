module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_diplomado', {
        id_cal_diplomado: {
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