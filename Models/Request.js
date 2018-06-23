

module.exports = function (sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        hasAccepted : {
            type: DataTypes.BOOLEAN,
            defaultValue : false
        },
 
    });

    Request.associate = function (models) {
        Request.belongsTo(models.Market, {
            foreignKey: {
                allowNull: true
            }
        });
        Request.belongsTo(models.User, {
            foreginKey: {
                allowNull: true
           }
        })
    }

    return Request;
}