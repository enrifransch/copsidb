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
        editorial: {
            type: DataTypes.TEXT
        },
        genero: {
            type: DataTypes.TEXT
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