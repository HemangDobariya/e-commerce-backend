const db = require("../config/connection")
const users = db.users
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



module.exports.register = async (req, res) => {
    try {
        const list = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            role: req.body.selectedRole
        }

        let user = await users.create(list)
        console.log(user)
        return res.status(200).json({ status: 200, message: `${user.role} register successfully`, data:{data:user, role: list.role }})
    }
    catch (error) {
        return res.status(400).json({ status: 400, message: error.message  ,data:null})
    }
}


// login
module.exports.login = async (req, res) => {

    try {

        const { email, password } = req.body
        const emailvalid = await users.findOne({ where: { email: email } })
        // emailvalid are if not match
        if (!emailvalid) {
            return res
                .status(400)
                .json({ msg: "email are not valid ", data:null });
        }
        // password validate
        const passValid = await bcrypt.compare(password, emailvalid.password);
        if (!passValid) {

            return res.status(400).json({ message: "password are not valid" ,data:null })
        }

        //    payload
        const payload = {
            id: emailvalid.user_id,
            email: emailvalid.email,
            password: emailvalid.password,
            role: emailvalid.role
        }

        const token = await jwt.sign(payload, "secrate", { expiresIn: "1h" })
        return res.status(200).json({ status: 200, message: `${emailvalid.role} is successfully logIn`, data: { token: token, role: emailvalid.role, id: emailvalid.user_id } })
    } catch (error) {
        res.status(400).json({ status: 400, suceess: false, message: error.message , data:null})
    }
} 