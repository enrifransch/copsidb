module.exports = function (sequelize, DataTypes){
    return sequelize.define('tallerFS_init', {
        inicio: {
            type: DataTypes.DATE
        },
        fin:{
            type: DataTypes.DATE
        }
    });
};