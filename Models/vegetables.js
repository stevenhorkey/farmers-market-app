
//THIS IS A TEST MODEL TO TEST PASSPORT AUTHENTICATION. ONLY AUTHENTICATED
//USERS SHOULD BE ABLE TO ADD VEGETABLES

module.exports = function (sequelize, DataTypes) {
    var Vegetable = sequelize.define("Vegetable", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Vegetable;
};