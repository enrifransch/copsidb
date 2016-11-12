module.exports = function (sequelize, DataTypes){
    return sequelize.define('cal_tallerDH', {
        calificacion: {
            type: DataTypes.INTEGER
        },
        notas: {
            type: DataTypes.TEXT
        }
    });
};