
const db = require("../config/connection")
const address = db.userAddress




module.exports.addShipAddress = async (req, res) => {
    try {
        const list = {
            user_id: req.body.user_id,
            shipping_address: req.body.shipping_address,
            country: req.body.country,
            city: req.body.city,
            zip_code: req.body.zip_code,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_no: req.body.phone_no
        }

        // { user_id: userdata.id, shipping_address: shipping, country: country, city: city, zip_code: zip, first_name: firstName, last_name: lastName, email: email, phone_no: phoneNo }

        const data = await address.create(list)

        return res.status(200).json({ status: 200, success: true, message: "successfully added new shiiping address", data:data})
    } catch (error) {
        return res.status(400).json({ status: 400, success: false, message: error.message })
    }
}


module.exports.getUserAddress = async (req, res) => {
    try {
        const id = req.query.user_id

        const data = await address.findAll({ where: { user_id: id } })
        return res.status(200).json({ status: 200, message: "get user address", data: data })

    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message })
    }

}
module.exports.updateAddress = async (req, res) => {
    try {
        const id = req.query.id
        // const data = await address.findOne({ where: { id: id } })
        // if (data) {
        //     const list = {
        //         user_id: req.body.user_id || data.user_id,
        //         first_name: req.body.first_name || data.first_name,
        //         last_name: req.body.last_name || data.last_name,
        //         email: req.body.email || data.email,
        //         phone_no: req.body.phone_no || data.phone_no,
        //         shipping_address: req.body.shipping_address || data.shipping_address,
        //         country: req.body.country || data.country,
        //         city: req.body.city || data.city,
        //         zip_code: req.body.zip_code || data.zip_code
        //     }

console.log("body",req.body)
            let pro = await address.update(req.body, { where: { id: id } });
            console.log( "pro" , pro)
            return res.status(200).json({
                success: true,
                msg: "record sucessfully updated",
                data:pro
            });
        // }
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message  })
    }

}


module.exports.deleteAddress = async (req, res) => {
    try {
        // delete a user itself
        const id = req.query.id;
        // console.log("id", id)
        // const data = await  address.findAll({where:{id:}})
        await address.destroy({ where: { id: id } });

        return res.status(200).json({
            success: true,
            msg: "This data has been removed ",
            data:null
        });
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}