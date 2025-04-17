
// role based authorization
const authorizeRole = (roles)=>{
    return (req,res,next)=>{
        console.log(req.user)
        if(!req.user){
            return res.status(400).json({success:false ,message:"user not get" ,  })
        }
        else if(!roles.includes(req.user.role)){
            return res.status(401).json({success:false ,message:`user not  authorized  ${req.user.role}`})

        }
        next()
    }
}


module.exports = {authorizeRole}