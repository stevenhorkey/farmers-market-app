

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
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
        }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Product;
};