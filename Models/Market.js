

module.exports = function (sequelize, DataTypes) {
    var Market = sequelize.define("Market", {
        marketName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marketAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        marketZip: {
            type: DataTypes.STRING,
            allowNull: true
        },
        marketTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marketImage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Market.associate = function (models) {
        Market.hasMany(models.Request);
        Market.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Market;
};