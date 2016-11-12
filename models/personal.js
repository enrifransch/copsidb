module.exports = function (sequelize, DataTypes){
    return sequelize.define('personal', {
        id_personal: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.TEXT
        },
        apellidos: {
            type: DataTypes.TEXT
        },
        puesto: {
            type: DataTypes.TEXT
        },
        direccion: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.TEXT
        },
        celular: {
            type: DataTypes.TEXT
        },
        telefono: {
            type: DataTypes.TEXT
        },
        fechaNac: {
            type: DataTypes.DATE
        },
        sexo: {
            type: DataTypes.TEXT
        },
        escolaridad: {
            type: DataTypes.TEXT
        },
        referencias: {
            type: DataTypes.TEXT
        },
        hrsTerapia: {
            type: DataTypes.INTEGER
        },
        cuota: {
            type: DataTypes.INTEGER
        }
    });
};