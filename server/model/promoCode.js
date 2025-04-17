module.exports = (sequelize, DataTypes) => {
    const promo_code = sequelize.define("promo_code", {
       promo_code:{
        type:DataTypes.STRING
       },
       promo_type:{
        type:DataTypes.STRING
       },
       promo_value:{
        type:DataTypes.INTEGER
       },promo_min_val:{
        type:DataTypes.INTEGER
       }
    });


    return promo_code;

}