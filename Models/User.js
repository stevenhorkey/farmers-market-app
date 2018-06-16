var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

    });

    User.associate = function (models) {
        
    }

    return User;
};