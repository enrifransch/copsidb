module.exports = function (sequelize, DataTypes){
    return sequelize.define('libro', {
        isbn: {
            type: DataTypes.TEXT
        },
        titulo: {
            type: DataTypes.TEXT
        },
        autores: {
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