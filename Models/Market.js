

module.exports = function (sequelize, DataTypes) {
    var Market = sequelize.define("Market", {
        marketName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        marketAddress: {
            type: DataTypes.TEXT,
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
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'https://cfmatl.org/wp-content/uploads/2016/01/Grant-Park-Farmers-Market.jpg'
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