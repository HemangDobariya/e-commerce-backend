const express = require("express")
const route = express.Router()
const controller = require("../controller/product.controller")
const multer = require("multer");
const path = require("path")
const {authMiddlewear} = require("../middlewear/jwt.middlewear")
const {authorizeRole} =require("../middlewear/authRole.middlewear")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, "public/images")
        cb(null,"server/public/images"); 
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

route.post("/add-product",authMiddlewear , authorizeRole(["seller"]) ,upload.single("file") ,controller.addProduct)



route.get("/show-seller-product",authMiddlewear,authorizeRole(["seller"]), controller.showSellerProduct)
    
route.get("/sellers",(req,res)=>{
    res.json({message:"seller route are working"})
})

module.exports=route 