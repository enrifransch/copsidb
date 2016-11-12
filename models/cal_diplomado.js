module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_diplomado', {
        calificacion: {
            type: DataTypes.INTEGER
        },
        notas: {
            type: DataTypes.TEXT
        }
    });
};