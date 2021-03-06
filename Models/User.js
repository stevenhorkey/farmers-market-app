var bcrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
    //This handles the encryption of the users password
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
};

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businessName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        profileImage: {
            type: DataTypes.TEXT,
            defaultValue: "https://www.rhinodigital.com/wp-content/uploads/2016/12/blank-user.jpg"
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Product);
        User.hasOne(models.Market);
    }

    return User;
};