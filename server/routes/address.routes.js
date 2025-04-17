const express = require("express")
const route = express.Router() 
const controller = require("../controller/address.controller")
const {authMiddlewear} = require("../middlewear/jwt.middlewear")
const {authorizeRole} = require("../middlewear/authRole.middlewear")


route.post("/add-address" ,authMiddlewear,authorizeRole(["user"]), controller.addShipAddress)
route.get("/get-address",authMiddlewear ,authorizeRole(["user"]) ,  controller.getUserAddress)

route.put("/update",authMiddlewear , authorizeRole(["user"]) ,  controller.updateAddress)
route.delete("/delete",authMiddlewear , authorizeRole(["user"]) ,  controller.deleteAddress)

module.exports = route