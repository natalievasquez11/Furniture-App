module.exports = function(sequelize, DataTypes) {
    var Furniture = sequelize.define("Furniture", {
        furn_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        delivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Furniture;
};