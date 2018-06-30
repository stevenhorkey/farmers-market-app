

module.exports = function (sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        UserId: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        hasAccepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    });

    Request.associate = function (models) {
        Request.belongsTo(models.Market, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return Request;
}