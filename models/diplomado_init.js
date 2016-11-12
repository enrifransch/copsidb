module.exports = function (sequelize, DataTypes){
    return sequelize.define('diplomado_init', {
        inicio: {
            type: DataTypes.DATE
        },
        fin:{
            type: DataTypes.DATE
        }
    });
};