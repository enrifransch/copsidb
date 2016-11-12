module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_tallerFS', {
        calificacion: {
            type: DataTypes.INTEGER
        },
        notas: {
            type: DataTypes.TEXT
        }
    });
};