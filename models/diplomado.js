module.exports = function (sequelize, DataTypes){
    return sequelize.define('diplomado', {
        nombre: {
            type: DataTypes.TEXT
        },
        aval:{
            type: DataTypes.TEXT
        },
        costo:{
            type: DataTypes.INTEGER
        }
    });
};