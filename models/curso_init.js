module.exports = function (sequelize, DataTypes){
    return sequelize.define('curso_init', {
        inicio: {
            type: DataTypes.DATE
        },
        fin:{
            type: DataTypes.DATE
        }
    });
};