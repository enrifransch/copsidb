module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerDH_init', {
        id_tallerDH_init: {
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