
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
        , first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },role:{
            type:DataTypes.STRING,
            defaultValue:"user"
        }

    });


    return users;

}