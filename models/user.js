var bcrypt = require('bcryptjs');
var _ = require('underscore');
var cryptojs = require('crypto-js');
var jwt = require('jsonwebtoken');

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        salt: {
            type: DataTypes.STRING
        },
        password_hash: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            validate: {
                len: [6,20]
            },
            set: function (value){
                var salt = bcrypt.genSaltSync(10);
                var hashedPassword = bcrypt.hashSync(value, salt);

                this.setDataValue('password', value);
                this.setDataValue('salt', salt);
                this.setDataValue('password_hash', hashedPassword);
            }
        }
    }, {
        classMethods: {
            authenticate: function (body){
                return new Promise(function (resolve, reject){
                    if (typeof body.username !== 'string' || typeof body.password !== 'string') {
						return reject();
					}

                    user.findOne({
                        where: {
                            username: body.username
                        }
                    }).then(function(user){
                        if (!user || !bcrypt.compareSync(body.password, user.get('password_hash'))) {
							return reject();
						}

                        resolve(user);
                    }, function (er){
                        reject();
                    });
                });
            },
            findByToken: function (token){
                return new Promise(function (resolve, reject){
                    try{
                        var decodedJWT = jwt.verify(token, 'qwerty098');
						var bytes = cryptojs.AES.decrypt(decodedJWT.token, 'abc123!@#!');
						var tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));

                        user.findById(tokenData.id).then(function (user){
                            if (user){
                                resolve(user);
                            } else {
                                reject();
                            }
                        }, function (er){
                            reject();
                        });
                    } catch (er){
                        reject();
                    }
                });
            }
        },

        instanceMethods: {
            toPublicJSON: function (){
                var json = this.toJSON();
                return _.pick(json, 'id', 'username', 'createdAt', 'updatedAt');
            },
            generateToken: function (type){
                if(!_.isString(type)){
                    return undefined;
                }

                try {
                    var stringData = JSON.stringify({id: this.get('id'), type:type});
                    var encryptedData = cryptojs.AES.encrypt(stringData, 'abc123!@#!').toString();
                    var token = jwt.sign({
                        token: encryptedData
                        }, 'qwerty098');

                        return token;
                } catch (er) {
                    return undefined;
                }
            }
        }
    });

    return user;

};