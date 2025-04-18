const db = require("../config/connection")
const product = db.product
const multer = require("multer")
const path = require("path")



module.exports.addProduct = async (req, res) => {
    console.log("File received:", req.file);
    const list = {
        // seller_id:req.body.seller_id,
        seller_id:req.user.id,
        quentity: req.body.quentity,
        title: req.body.title,
        price: req.body.price,
        descripton: req.body.descripton,
        image: req.file.filename,
    }
    try {
        const add = await product.create(list)
        console.log(add)
        return res.status(200).json({ status: 200, message: "successfully addProduct", data: add })
    } catch (error) {
        return res.status(400).json({ status: 404, message: error.message })
    }
}



module.exports.showProduct = async (req, res) => {
    try {

        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);
        
        let page = 0;
        if (!Number.isNaN(pageAsNumber)) {
            page = pageAsNumber;
        }

        let size = 10;
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber;
        }

        const user = await product.findAndCountAll({ limit: size, offset: page * size, })
        console.log(user)

        const totalpages = Math.ceil(user.count / size);
        const nextpage = page < totalpages ? page + 1 : null;
        console.log(user);
        res.status(200).json({
         
            messege: "All products data successfuly fetched",
            data: user.rows,
            count: { total: user.count, pages: totalpages, nextpage: nextpage },
        });


    } catch (error) {
        res.status(400).json({ status: 400, message: error.massage })
    }
}




module.exports.showSellerProduct = async (req, res) => {
    try {

        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);
        // const id =req.query.id;
        const id = req.user.id
        console.log("id",id)
        let page = 0;
        if (!Number.isNaN(pageAsNumber)) {
            page = pageAsNumber;
        }

        let size = 10;
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
            size = sizeAsNumber;
        }

        const user = await product.findAndCountAll({where:{seller_id:id },order: [
            ['product_id', 'DESC'],
      ]})
        console.log(user)
        // , limit: size, offset: page * size,
        const totalpages = Math.ceil(user.count / size);
        const nextpage = page < totalpages ? page + 1 : null;
        console.log(user);
        res.status(200).json({
         
            messege: "All products data successfuly fetched",
            data: user.rows,
            count: { total: user.count, pages: totalpages, nextpage: nextpage },
        });


    } catch (error) {
        res.status(400).json({ status: 400, message: error.message })
    }
}



