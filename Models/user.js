var bcrypt = require('bcrypt-nodejs');

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
    }, {
        hooks: {
            beforeCreate: (user, options) => {
                if(this.isModified('password') || this.isNew) {
                    bcrypt.genSalt(10, function (err, salt) {
                        if (err) {
                            return err;
                        }
                        bcrypt.hash(user.password, salt, null, function (err, hash) {
                            if (err) {
                                return err;
                            }
                            user.password = hash;
                        });
                    });
                }
            }
        }
    }, {
        instanceMethods: {
            comparePassword : function (passw, cb) {
                bcrypt.compare(passw, this.password, function (err, isMatch) {
                    if (err) {
                        return cb(err);
                    }
                    cb(null, isMatch);
                });
            }
        }
    });

    // User.pre('save', function (next) {
    //     var user = this;
    //     if (this.isModified('password') || this.isNew) {
    //         bcrypt.genSalt(10, function (err, salt) {
    //             if (err) {
    //                 return next(err);
    //             }
    //             bcrypt.hash(user.password, salt, null, function (err, hash) {
    //                 if (err) {
    //                     return next(err);
    //                 }
    //                 user.password = hash;
    //                 next();
    //             });
    //         });
    //     } else {
    //         return next();
    //     }
    // });
    
    // User.methods.comparePassword = function (passw, cb) {
    //     bcrypt.compare(passw, this.password, function (err, isMatch) {
    //         if (err) {
    //             return cb(err);
    //         }
    //         cb(null, isMatch);
    //     });
    // };


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