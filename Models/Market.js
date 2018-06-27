

module.exports = function (sequelize, DataTypes) {
    var Market = sequelize.define("Market", {
        marketName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marketLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marketTime: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Market.associate = function (models) {
        Market.hasMany(models.Request);
        Market.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Market;
};