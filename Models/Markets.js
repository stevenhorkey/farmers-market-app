

module.exports = function (sequelize, DataTypes) {
    var Markets = sequelize.define("User", {
        marketName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marketLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Markets.associate = function (models) {

    }

    return Markets;
};