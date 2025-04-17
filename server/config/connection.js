const bcrypt =require("bcrypt")
const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize("ecommerce", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})
//
sequelize.authenticate({ force: true }).then(() => {
    console.log("authenticated")

}).catch((err) => {
    console.log("Error" + err)
})
const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.users = require("../model/users")(sequelize, DataTypes)
db.cart = require("../model/cart")(sequelize, DataTypes)
db.product = require("../model/product")(sequelize, DataTypes)
db.promoCode = require("../model/promoCode")(sequelize,DataTypes)
db.userAddress = require("../model/address")(sequelize,DataTypes)

db.sequelize.sync({ force:false}).then(async () => {
    // const list={
    //    first_name: "admin",
    //     last_name:"admin",
    //     email:"admin@gmail.com",
    //     password:"admin",
    //     role:"admin"
    // }
    // const admin = db.users.create(list)
    //  if(admin){
    //     console.log("admin created")
    //  }else{
    //     console.log("admin not created")
    //  }
    
    
    console.log("database successfully sync")
}).catch((error) => {
    console.log("error syncing database", error)
})
module.exports = db;