

module.exports = function (sequelize, DataTypes) {
    var Products = sequelize.define("User", {
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "https://www.rhinodigital.com/wp-content/uploads/2016/12/blank-user.jpg"
        },
        marketName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        farmerID: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Products.associate = function (models) {
        Products.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Products;
};