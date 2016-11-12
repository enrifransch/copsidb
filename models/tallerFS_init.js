module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerFS_init', {
        id_tallerFS_init: {
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