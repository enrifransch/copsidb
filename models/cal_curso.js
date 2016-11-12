module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_curso', {
        id_cal_curso: {
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