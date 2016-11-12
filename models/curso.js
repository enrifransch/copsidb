module.exports = function (sequelize, DataTypes){
    return sequelize.define('curso', {
        nombre: {
            type: DataTypes.TEXT
        },
        costo: {
            type: DataTypes.INTEGER
        }
    });
};