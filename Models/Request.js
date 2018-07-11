module.exports = function (sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        UserId: {
            type: DataTypes.INTEGER,
            allownull: false
        },
        farmerName: {
            type: DataTypes.STRING,
            allownull: false
        },
        businessName: {
            type: DataTypes.STRING,
            allownull: true
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
        })
       
    }
    
    return Request;
}