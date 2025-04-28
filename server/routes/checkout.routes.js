const express = require("express")
const route = express.Router() 
const {checkOutSession}= require("../controller/checkout.controller")


route.post("/create-checkout-session" ,checkOutSession )

module.exports=route