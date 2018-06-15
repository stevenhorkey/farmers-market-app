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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
        profileImage: {
            type: DataTypes.STRING,
            defaultValue: "https://www.rhinodigital.com/wp-content/uploads/2016/12/blank-user.jpg"
        }
    });


    // User.associate = function (models) {
    //     User.hasMany(models.Goal, {
    //         onDelete: "cascade",
    //     })
    //     User.hasMany(models.Friend, {
    //         onDelete: "cascade"
    //     })
    // }

    return User;
};