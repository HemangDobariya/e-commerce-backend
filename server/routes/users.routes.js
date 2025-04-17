const express = require("express")
const route = express.Router()
const controller = require("../controller/users.controller")
const  {authMiddlewear} = require("../middlewear/jwt.middlewear")
const {authorizeRole} = require("../middlewear/authRole.middlewear")
const controller2 = require("../controller/product.controller")
// register
route.post("/register",controller.register)

// login 
route.post("/login",controller.login)
route.get("/show-Product",  authMiddlewear,authorizeRole(["user"]), controller2.showProduct)
module.exports=route 