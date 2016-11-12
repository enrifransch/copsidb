module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerDH', {
        nombre: {
            type: DataTypes.TEXT
        },
        costo:{
            type: DataTypes.INTEGER
        }
    });
};