module.exports = function (sequelize, DataTypes){
    return sequelize.define('curso_init', {
        id_curso_init: {
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