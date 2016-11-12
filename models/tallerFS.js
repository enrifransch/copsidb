module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerFS', {
        nombre: {
            type: DataTypes.TEXT
        },
        costo:{
            type: DataTypes.INTEGER
        }
    });
};