module.exports = function (sequelize, DataTypes){
    return sequelize.define('curso', {
        id_curso: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.TEXT
        },
        costo: {
            type: DataTypes.INTEGER
        }
    });
};