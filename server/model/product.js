
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        seller_id:{
            type: DataTypes.INTEGER,
        }
        , title: {
            type: DataTypes.STRING
        },
        quentity:{
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        descripton:{
            type:DataTypes.STRING
        },
        image:{
           type:DataTypes.STRING
        }
    });


    return product;

}