module.exports = function (sequelize, DataTypes){
    return sequelize.define('inventario', {
        id_inventario: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.TEXT
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
        tipo: {
            type: DataTypes.TEXT
        },
        comentarios: {
            type: DataTypes.TEXT
        }
    });
};