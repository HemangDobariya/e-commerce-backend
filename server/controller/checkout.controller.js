// const product = require("../model/product")
const dotenv = require('dotenv');
dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const stripe = require("stripe")("sk_test_51RHi83QrXeZ5Ny8fcgi164RcGkvalUjK7QSq1IjdrHXYEm4UVKwJYi8UlTTpkgabVBvrUToGDXOe7QzzyIF47oh400D6xzOjl8")
// "sk_test_51RHi83QrXeZ5Ny8fcgi164RcGkvalUjK7QSq1IjdrHXYEm4UVKwJYi8UlTTpkgabVBvrUToGDXOe7QzzyIF47oh400D6xzOjl8"
module.exports.checkOutSession =async(req,res)=>{

    const {products} = req.body
    console.log(products)

    const lineItems =   products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.title
            },
            unit_amount:product.price * 100
        },
        quantity:product.prod_quentity
            
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:lineItems, 
        mode:'payment',
        allow_promotion_codes:true,
        
        // discounts: [{ promotion_code: 'FLAT200' }],
        // coupon: "FLAT200",
        success_url:"http://localhost:5173/success",
        cancel_url:"http://localhost:5173/cancel",
    })


    return res.json({id:session.id})
}