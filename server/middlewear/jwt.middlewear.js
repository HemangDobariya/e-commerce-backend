const jwt = require("jsonwebtoken")
const db = require("../config/connection")
const user = db.users

const authMiddlewear = async (req, res, next) => {
    try {


        const token = req.header("Authorization")
        // console.log("token",token)
        const jwtToken = await token.replace("Bearer", "").trim();

        // if token not get
        if (!token) {
            res.status(400).json({ success: false, message: "no token provided" })
        }
        // verify token
        const isVerified = await jwt.verify(jwtToken, "secrate")
        req.user = isVerified
        next()
    }
    catch (error) {
        // res.status(400).json({success:false , message:error.message })
        // if token is expired
        if (error) {
            if (error.name = "TokenExpiredError") {
                return res.status(401).json({ success: false, message: "json token expired! please login again" })
            }
            // if token is not match
            return res.status(401).json({ success: false, message: "jwt token verification issue" })
        }

    }
}


module.exports = { authMiddlewear }