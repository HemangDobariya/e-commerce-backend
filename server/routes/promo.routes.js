const express = require("express")
const route = express.Router() 
const controller =require("../controller/promo.controller")
const {authMiddlewear} = require("../middlewear/jwt.middlewear")
const {authorizeRole} =require("../middlewear/authRole.middlewear")


route.post("/add-Promo", controller.addPromo)

route.get("/getPromo",authMiddlewear ,authorizeRole(["user"]), controller.getPromo)

module.exports=route