module.exports = function (sequelize, DataTypes){
    return sequelize.define('inventario', {
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