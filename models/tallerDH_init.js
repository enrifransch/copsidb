module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerDH_init', {
        inicio: {
            type: DataTypes.DATE
        },
        fin:{
            type: DataTypes.DATE
        }
    });
};