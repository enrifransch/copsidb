module.exports = function (sequelize, DataTypes){
    return sequelize.define('libro', {
        id_libro: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        isbn: {
            type: DataTypes.TEXT
        },
        nombre: {
            type: DataTypes.TEXT
        },
        titulo: {
            type: DataTypes.TEXT
        },
        autores: {
            type: DataTypes.TEXT
        },
        nombre: {
            type: DataTypes.TEXT
        },
        genero: {
            type: DataTypes.INTEGER
        },
        nPags: {
            type: DataTypes.INTEGER
        },
        existencia: {
            type: DataTypes.INTEGER
        },
        comentarios: {
            type: DataTypes.TEXT
        }
    });
};