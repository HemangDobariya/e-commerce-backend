module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define("cart", {
       cart_id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
       },
       title:{
        type:DataTypes.STRING
       },
       price:{
        type:DataTypes.INTEGER
       },
       quentity:{
       type:DataTypes.INTEGER
       }
    });


    return cart;

}