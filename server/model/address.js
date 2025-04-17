module.exports = (sequelize, DataTypes) => {
    const userAddress = sequelize.define("userAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,

        },
        first_name: {
            type: DataTypes.STRING
        }, 
        last_name: {
            type: DataTypes.STRING
        },
         email: {
            type: DataTypes.STRING
        }, 
        phone_no: {
            type: DataTypes.STRING
        }
        ,
        shipping_address: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        zip_code: {
            type: DataTypes.INTEGER
        }
    });


    return userAddress;

}