module.exports = function (sequelize, DataTypes){
    return sequelize.define('diplomado', {
        id_diplomado: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
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