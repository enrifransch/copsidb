module.exports = function (sequelize, DataTypes){
    return sequelize.define('diplomado_init', {
        id_diplomado_init: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        inicio: {
            type: DataTypes.DATE
        },
        fin:{
            type: DataTypes.DATE
        }
    });
};