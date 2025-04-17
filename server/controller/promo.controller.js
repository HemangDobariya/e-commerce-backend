const db = require("../config/connection")
const promoCode = db.promoCode



module.exports.addPromo = async (req, res) => {

    try {
        const list = {
            promo_code: req.body.promocode,
            promo_type: req.body.promotype,
            promo_value: req.body.promovalue,
            promo_min_val: req.body.promominval
        }
        const promo = await promoCode.create(list)
        return res.status(200).json({ status: 200, sucess: true, message: "promoCode added" })


    } catch (error) {
        return res.status(400).json({ status: 400, sucess: false, message: error.message })
    }


}


module.exports.getPromo = async (req, res) => {
    try {
        // const promoCode=req.query.promoCode
        // const data = await promoCode.findOne({ where: { promo_code: promoCode} })
        const promoCodeVal = req.query.promoCode
        const data = await promoCode.findOne({ where: { promo_code: promoCodeVal } })
        return res.status(200).json({ success: true, message: "promo code fetch", data: data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}